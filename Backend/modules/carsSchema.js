const mongoose = require("mongoose");

mongoose
  .connect(
     "mongodb+srv://junaidkhan23785:%25-YkRF%21.KLRsVr6@carbuddy.vasfi.mongodb.net/?retryWrites=true&w=majority&appName=carbuddy"
  )
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
