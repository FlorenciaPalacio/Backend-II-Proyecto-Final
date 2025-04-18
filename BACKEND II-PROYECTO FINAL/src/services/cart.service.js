import { cartDAO } from "../dao/Factory.js";

export default class CartService {
  getAll = async () => {
    return await cartDAO.getAll();
  };

  getById = async (id) => {
    return await cartDAO.getById(id);
  };

  create = async () => {
    return await cartDAO.create();
  };

  addProduct = async (cartId, productId, quantity = 1) => {
    return await cartDAO.addProduct(cartId, productId, quantity);
  };

  delete = async (id) => {
    return await cartDAO.delete(id);
  };
}
