import ProductModel from "../../models/product.model.js";

class ProductMongo {
  async getAll() {
    try {
      return await ProductModel.find();
    } catch (error) {
      console.error("Error al obtener todos los productos:", error);
      throw error;
    }
  }

  async getById(id) {
    try {
      return await ProductModel.findById(id);
    } catch (error) {
      console.error("Error al obtener producto por ID:", error);
      throw error;
    }
  }

  async create(product) {
    try {
      return await ProductModel.create(product);
    } catch (error) {
      console.error("Error al crear producto:", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      return await ProductModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      return await ProductModel.findByIdAndDelete(id);
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      throw error;
    }
  }
}

export default ProductMongo;
