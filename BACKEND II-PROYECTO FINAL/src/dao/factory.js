import config from "../config/config.js";
import ProductManager from "../managers/product-manager.js";
import CartManager from "../managers/cart-manager.js";

let productDao;
let cartDao;

switch (config.PERSISTENCE) {
  case "FS":
    productDao = new ProductManager("src/data/products.json");
    cartDao = new CartManager("src/data/carts.json");
    break;
  case "MONGO":
    
    break;
  default:
    throw new Error("Persistencia no soportada");
}

export { productDao, cartDao };
