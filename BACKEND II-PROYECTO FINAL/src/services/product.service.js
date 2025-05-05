import { productDao } from "../dao/factory.js";

export default class ProductService {
  getAll = async () => {
    return await productDao.getAll();
  };

  getById = async (id) => {
    return await productDao.getById(id);
  };

  create = async (product) => {
    return await productDao.create(product);
  };

  update = async (id, data) => {
    return await productDao.update(id, data);
  };

  delete = async (id) => {
    return await productDao.delete(id);
  };
}
