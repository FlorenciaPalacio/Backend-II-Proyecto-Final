import fs from "fs";
const path = "./src/data/carts.json";

export default class CartDAOFile {
  constructor() {
    this.carts = [];
    this.ultId = 0;
    this.init();
  }

  async init() {
    try {
      const data = await fs.promises.readFile(path, "utf-8");
      this.carts = JSON.parse(data);
      this.ultId = this.carts.length > 0 ? Math.max(...this.carts.map(c => c.id)) : 0;
    } catch {
      this.carts = [];
      await this.saveCarts();
    }
  }

  async saveCarts() {
    await fs.promises.writeFile(path, JSON.stringify(this.carts, null, 2));
  }

  async getAll() {
    return this.carts;
  }

  async getById(id) {
    const cart = this.carts.find(c => c.id === parseInt(id));
    if (!cart) throw new Error("Carrito no encontrado");
    return cart;
  }

  async create() {
    const newCart = { id: ++this.ultId, products: [] };
    this.carts.push(newCart);
    await this.saveCarts();
    return newCart;
  }

  async addProduct(cartId, productId, quantity = 1) {
    const cart = await this.getById(cartId);
    const existingProduct = cart.products.find(p => p.product === parseInt(productId));

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ product: parseInt(productId), quantity });
    }

    await this.saveCarts();
    return cart;
  }

  async delete(id) {
    const index = this.carts.findIndex(c => c.id === parseInt(id));
    if (index === -1) throw new Error("Carrito no encontrado");
    this.carts.splice(index, 1);
    await this.saveCarts();
  }
}
