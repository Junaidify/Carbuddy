const express = require("express");
const RentCar = require("../modules/carsSchema");
const bodyParser = require("body-parser");

// router function
const carRouter = express.Router();

carRouter.use(bodyParser.json());

carRouter.get("/cars", async (req, res) => {
  const category = req.body;
  console.log(category);
  try {
    const cars = RentCar.find({ category });
    res.status(200).json(cars);
  } catch (err) {
    res.status(400).json({ message: "Invalid request" });
  }
});


module.exports = carRouter; 
