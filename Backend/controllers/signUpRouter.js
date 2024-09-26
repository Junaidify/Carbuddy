const express = require("express");
const signUpRouter = express.Router();
const SignUp = require("../modules/signUpSchema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../auth/auth");

signUpRouter.use(express.urlencoded({ extended: true }));
signUpRouter.use(express.json());

signUpRouter.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("phone").notEmpty().withMessage("Phone is required"),
    body("password").isLength({ min: 6 }).withMessage("Password is required"),
  ],
  async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { name, email, phone, password } = req.body;
    try {
      const isExist = await SignUp.findOne({ email });

      if (isExist) {
        return res.status(200).json({ message: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new SignUp({
        name,
        email,
        phone,
        password: hashedPassword,
      });
      await newUser.save();

      const token = generateToken(newUser);
      console.log(token);

      if (!token) {
        return res.status(500).json({ message: "Failed to generate token" });
      }

      res.cookie("token", token, { httpOnly: true, secure: false });
      return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.error("Error is Sign In", err);
      res.status(500).json({ message: "Invalid request" });
    }
  }
);

module.exports = signUpRouter;
