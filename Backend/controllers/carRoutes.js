const express = require("express");
const RentCar = require("../modules/carsSchema");
const bodyParser = require("body-parser");

// router function
const carRouter = express.Router();


carRouter.use(bodyParser.urlencoded({ extended: true }));

carRouter.get("/cars", async (req, res) => {
  const { category } = req.query;
  console.log(category);
  try {
    const cars = await RentCar.find({ category });
    console.log(cars);
    res.status(200).json(cars);
  } catch (err) {
    res.status(400).json({ message: "Invalid request" });
  }
});

carRouter.get("/cars/:id", async (req, res) => {
  const { id : _id } = req.params;
  try {
    const car = await RentCar.findById(_id);
    console.log(car);
    res.status(200).json(car);
  } catch (err) {
    res.status(400).json({ message: "Invalid request" });
  }
});

module.exports = carRouter;
