import config from "../config/config.js";

// FS
import ProductManager from "./fs/product.dao.js";
import CartManager from "./fs/cart.dao.js";

// Mongo
import ProductMongo from "./mongo/product.mongo.js";

let productDAO;
let cartDAO;

switch (config.PERSISTENCE) {
  case "FS":
    productDAO = new ProductManager("src/data/products.json");
    cartDAO = new CartManager("src/data/carts.json");
    break;

  case "MONGO":
    productDAO = new ProductMongo();
    
    break;

  default:
    throw new Error("⚠️ Persistencia no soportada");
}

export { productDAO, cartDAO };
