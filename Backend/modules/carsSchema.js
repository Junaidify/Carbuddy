const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/rentWheels")
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log("MongoDB isn't connected " + err));

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  perDayRent: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const RentCar = new mongoose.model("RentCar", carSchema);
module.exports = RentCar;
