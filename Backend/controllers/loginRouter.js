const express = require("express");
const loginRouter = express.Router();
const Login = require("../modules/loginSchema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { generateToken, verify } = require("../auth/auth");

loginRouter.use(express.urlencoded({ extended: true }));
loginRouter.use(express.json());

loginRouter.post(
  "/login",
  [
    body("user_email").isEmail().withMessage("Email is required"),
    body("user_password")
      .isLength({ min: 6 })
      .withMessage("Password is required"),
  ],
  async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { user_email, user_password } = req.body;

    try {
      const isExist = await Login.findOne({ email: user_email });
      if (!isExist)
        return res.status(401).json({ message: "User does not exist" });

      const isMatched = await bcrypt.compare(user_password, isExist.password);

      if (!isMatched) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = generateToken(isExist);

      if (!token)
        return res.status(401).json({ message: "Invalid credentials" });

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 3600000,
        })
        .json({ message: "Login successful" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Invalid request" });
    }
  }
);

loginRouter.get("/login", (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const verifyToken = verify(token);

  if (!verifyToken) return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json({ message: "Login successful" });
});

loginRouter.get("/logout", (req, res) => {
  res.status(200).clearCookie("token").json({ message: "Logout successful" });
});

module.exports = loginRouter;
