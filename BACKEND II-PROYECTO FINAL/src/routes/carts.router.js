import express from "express";
import {
  createCart,
  getCartById,
  addProductToCart
} from "../controllers/cart.controller.js";

const router = express.Router();

// Crear un nuevo carrito
router.post("/", createCart);

// Obtener un carrito por su ID
router.get("/:cid", getCartById);

// Agregar un producto a un carrito
router.post("/:cid/product/:pid", addProductToCart);

export default router;
