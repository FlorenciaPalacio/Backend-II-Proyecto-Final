import CartService from "../services/cart.service.js";

const cartService = new CartService();

export const getAllCarts = async (req, res) => {
  try {
    const carts = await cartService.getAll();
    res.json({ status: "success", data: carts });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const getCartById = async (req, res) => {
  try {
    const cart = await cartService.getById(req.params.cid);
    res.json({ status: "success", data: cart });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const createCart = async (req, res) => {
  try {
    const cart = await cartService.create();
    res.json({ status: "success", data: cart });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const updatedCart = await cartService.addProduct(cid, pid, quantity || 1);
    res.json({ status: "success", data: updatedCart });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    await cartService.delete(req.params.cid);
    res.json({ status: "success", message: "Carrito eliminado" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};
