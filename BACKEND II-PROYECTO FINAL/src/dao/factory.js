import config from "../config/config.js";
import ProductManager from "../managers/product-manager.js";
import CartManager from "../managers/cart-manager.js";

import ProductMongoDAO from "./product.dao.mongo.js";

let productDAO;
let cartDAO;

switch (config.PERSISTENCE) {
  case "FS":
    productDAO = new ProductManager("src/data/products.json");
    cartDAO = new CartManager("src/data/carts.json");
    break;

  case "MONGO":
    productDAO = new ProductMongoDAO();
    break;

  default:
    throw new Error("Persistencia no soportada");
}

export { productDAO, cartDAO };
