import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

const router = express.Router();

// Ruta GET para obtener todos los productos (con optional ?limit)
router.get("/", getAllProducts);

// Ruta GET para obtener un producto por ID
router.get("/:pid", getProductById);

// Ruta POST para crear un nuevo producto
router.post("/", createProduct);

// Ruta PUT para actualizar un producto por ID
router.put("/:pid", updateProduct);

// Ruta DELETE para eliminar un producto por ID
router.delete("/:pid", deleteProduct);

export default router;
