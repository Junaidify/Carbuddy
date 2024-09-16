const mongoose = require("mongoose");
const express = require("express");
const app = express();

const saveCarSchema = new mongoose.Schema({
  carId: {
    type: String,
    required: true,
  },
});

const SaveCar = mongoose.model("SaveCar", saveCarSchema);
module.exports = SaveCar;
