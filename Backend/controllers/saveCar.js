const express = require("express");
const RentCar = require("../modules/carsSchema");
const SaveCar = require("../modules/saveCarSchema");

const saveCar = express.Router();

saveCar.use(express.urlencoded({ extended: true }));
saveCar.use(express.json());

saveCar.post("/savelater", async (req, res) => {
  const { id } = req.body;

  try {
    const saveCar = new SaveCar({ carId: id });
    await saveCar.save();
    res.status(201).json({ message: "Car saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Invalid request" });
  }
});

saveCar.delete("/savelater", async (req, res) => {
  const { id } = req.body;

  try {
    await SaveCar.findOneAndDelete({ carId: id });
    res.status(200).json({ message: "Car removed from save later" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Invalid request" });
  }
});

module.exports = saveCar;
