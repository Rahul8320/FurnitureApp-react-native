const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Load Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// add Router
app.use("/products", productRouter);
app.listen(port, () => console.log(`Furniture app listening on port ${port}!`));
