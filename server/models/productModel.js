const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  category: String,
  title: String,
  image: String,
  description: String,
  price: Number,
});

const Item = mongoose.model("Item", productSchema, "products");

module.exports = Item;
