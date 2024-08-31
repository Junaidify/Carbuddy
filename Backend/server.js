const express = require("express");
const app = express();
const carRouter = require("./controllers/carRoutes");

const PORT = 3000;

// car routers
app.use("/", carRouter);

app.listen(PORT, () => {
  console.log(PORT);
});
