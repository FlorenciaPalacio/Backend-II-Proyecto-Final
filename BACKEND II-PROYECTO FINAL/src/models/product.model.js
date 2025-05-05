// src/models/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  img: String,
  code: {
    type: String,
    unique: true,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
