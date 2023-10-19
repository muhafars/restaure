import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";

const port = process.env.PORT || 3002;
const app = express();
app.get("/", (req, res) => {
  res.send("Assalamualaikum Warahmatullah from server");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p._id === id);
  if (product) {
    res.json(product);
  }
});
app.listen(port, () =>
  console.log(
    `Server Running on \nRoot: \thttp://localhost:${port} \nApi Product: \thttp://localhost:${port}/api/products `
  )
);
