const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Product Service Running 🛍️" });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "T-Shirt", price: 499 },
    { id: 2, name: "Shoes", price: 1999 }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});

