import fs from "fs";

class CartManager {
  constructor(path) {
    this.path = path;
    this.carts = [];
    this.ultId = 0;

    this.cargarCarritos();
  }

  async cargarCarritos() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      this.carts = JSON.parse(data);
      if (this.carts.length > 0) {
        this.ultId = Math.max(...this.carts.map((cart) => cart.id));
      }
    } catch (error) {
      console.log("Archivo no encontrado, se creará uno nuevo.");
      await this.guardarCarritos();
    }
  }

  async guardarCarritos() {
    await fs.promises.writeFile(this.path, JSON.stringify(this.carts, null, 2));
  }

  async create() {
    const nuevoCarrito = {
      id: ++this.ultId,
      products: []
    };

    this.carts.push(nuevoCarrito);
    await this.guardarCarritos();
    return nuevoCarrito;
  }
  async getAll() {
    return this.carts;
  }

  async getById(carritoId) {
    const carrito = this.carts.find(c => c.id === parseInt(carritoId));
    if (!carrito) throw new Error("Carrito no encontrado");
    return carrito;
  }

  async addProduct(carritoId, productoId, quantity = 1) {
    const carrito = await this.getById(carritoId);
    const existeProducto = carrito.products.find(p => p.product === parseInt(productoId));

    if (existeProducto) {
      existeProducto.quantity += quantity;
    } else {
      carrito.products.push({ product: parseInt(productoId), quantity });
    }

    await this.guardarCarritos();
    return carrito;
  }

  async delete(carritoId) {
    const index = this.carts.findIndex(c => c.id === parseInt(carritoId));
    if (index === -1) throw new Error("Carrito no encontrado");
    this.carts.splice(index, 1);
    await this.guardarCarritos();
  }
}

export default CartManager;
