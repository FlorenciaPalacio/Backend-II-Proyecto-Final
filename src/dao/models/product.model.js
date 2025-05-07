import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  stock: { type: Number, required: true },
}, {
  timestamps: true
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
