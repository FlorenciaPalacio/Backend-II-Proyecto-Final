// src/dao/Factory.js
import config from "../config/config.js";
import ProductManager from "../managers/product-manager.js";
import CartManager from "../managers/cart-manager.js";

// Importamos los DAOs de Mongo
import ProductMongoDAO from "./product.dao.mongo.js";
// import CartMongoDAO from "./cart.dao.mongo.js"; // cuando lo tengas

let productDAO;
let cartDAO;

switch (config.PERSISTENCE) {
  case "FS":
    productDAO = new ProductManager("src/data/products.json");
    cartDAO = new CartManager("src/data/carts.json");
    break;

  case "MONGO":
    productDAO = new ProductMongoDAO();
    // cartDAO = new CartMongoDAO(); // lo activás cuando lo crees
    break;

  default:
    throw new Error("Persistencia no soportada");
}

export { productDAO, cartDAO };


