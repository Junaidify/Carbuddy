const express = require("express");
const app = express();
const cors = require("cors");
const carRouter = require("./controllers/carRoutes");
const saveCar = require("./controllers/saveCar");
const paymentRouter = require("./controllers/payment");
const signUpRouter = require("./controllers/signUpRouter");

const PORT = 3000;
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// car routers
app.use("/", carRouter);
app.use("/", saveCar);
app.use("/", paymentRouter);
app.use("/", signUpRouter);

app.listen(PORT, () => {
  console.log(PORT);
});
