const express = require("express");
const app = express();
const cors = require("cors");
const carRouter = require("./controllers/carRoutes");
const saveCar = require("./controllers/saveCar");

const PORT = 3000;
app.use(cors());
app.use(express.json());

// car routers
app.use("/", carRouter);
app.use("/", saveCar);

app.listen(PORT, () => {
  console.log(PORT);
});
