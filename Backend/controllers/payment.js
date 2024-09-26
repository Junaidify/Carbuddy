const Payment = require("../modules/paymentSchema");
const express = require("express");

const paymentRouter = express.Router();
paymentRouter.use(express.urlencoded({ extended: true }));
paymentRouter.use(express.json());

paymentRouter.post("/payment", async (req, res) => {
  const {
    name,
    email,
    phone,
    house,
    street,
    city,
    pincode,
    state,
    customer_name,
    card_number,
    expiry_date,
    cvv,
  } = req.body;

  try {
    const newPayment = new Payment({
      name,
      email,
      phone,
      address: {
        house,
        street,
        city,
        pincode,
        state,
      },
      card_details: {
        customer_name,
        card_number,
        expiry_date,
        cvv,
      },
    });
    await newPayment.save();
    res.status(201).json({ message: "Payment done successfully" });
  } catch (err) {
    console.error("Payment failed", err);
    res.status(400).json({ message: "Payment Failed" });
  }
});

module.exports = paymentRouter;
