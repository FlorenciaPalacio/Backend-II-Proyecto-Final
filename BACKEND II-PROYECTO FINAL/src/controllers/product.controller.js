import ProductService from "../services/product.service.js";

const productService = new ProductService();

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.json({ status: "success", data: products });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getById(req.params.pid);
    res.json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await productService.create(req.body);
    res.json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await productService.update(req.params.pid, req.body);
    res.json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await productService.delete(req.params.pid);
    res.json({ status: "success", message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};
