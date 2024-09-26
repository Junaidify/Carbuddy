const mongoose = require("mongoose");


const phoneReg = /^\d{10}$/;
const cardReg = /^\d{16}$/;
const cvvReg = /^\d{3}$/;
const pincodeReg = /^\d{6}$/; 
const expiryReg = /^\d{2}\/\d{2}$/;

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    house: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
      match: [pincodeReg, "Invalid pincode"],
    },
    state: {
      type: String,
      required: true,
    },
  },
  card_details: {
    customer_name: {
      type: String,
      required: true,
    },
    card_number: {
      type: String,
      required: true,
      match: [cardReg, "Invalid card number"],
    },
    expiry_date: {
      type: String,
      required: true,
      match: [expiryReg, "Invalid expiry date"],
    },
    cvv: {
      type: String,
      required: true,
      match: [cvvReg, "Invalid cvv"],
    },
  },
});

const Payment = new mongoose.model("Payment", paymentSchema);
module.exports = Payment;
