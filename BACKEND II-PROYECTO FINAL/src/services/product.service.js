import { productDAO } from "../dao/Factory.js";

export default class ProductService {
  getAll = async () => {
    return await productDAO.getAll();
  };

  getById = async (id) => {
    return await productDAO.getById(id);
  };

  create = async (product) => {
    return await productDAO.create(product);
  };

  update = async (id, data) => {
    return await productDAO.update(id, data);
  };

  delete = async (id) => {
    return await productDAO.delete(id);
  };
}
