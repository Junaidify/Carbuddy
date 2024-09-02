const express = require("express");
const app = express();
const cors = require("cors");
const carRouter = require("./controllers/carRoutes");

const PORT = 3000;
app.use(cors());

// car routers
app.use("/", carRouter);

app.listen(PORT, () => {
  console.log(PORT);
});
