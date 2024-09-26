const mongoose = require("mongoose");

const saveCarSchema = new mongoose.Schema({
  carId: {
    type: String,
    required: true,
  },
});

const SaveCar = mongoose.model("SaveCar", saveCarSchema);
module.exports = SaveCar;
