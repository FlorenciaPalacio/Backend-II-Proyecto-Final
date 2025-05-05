import express from "express"; 
import mongoose from "mongoose";
import config from "./config/config.js";
import { connectDB } from "./config/db.js";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";
const app = express(); 
const PUERTO = 8080;
connectDB();
mongoose.connect(config.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

//Middleware: 
app.use(express.json()); 
//Le decimos al servidor que vamos a trabajar con JSON.
app.use(express.static("./src/public"));

//Configuramos Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);


const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})

//Creamos la instancia de Socket.io del lado del backend. 
const io = new Server(httpServer); 

//Debo traer el array de productos: 
import ProductManager from "./managers/product-manager.js";
const manager = new ProductManager("./src/data/productos.json");

io.on("connection", async (socket) => {
    console.log("Un cliente se conectó");

    //Enviamos el array de productos al cliente:
    socket.emit("productos", await manager.getProducts());
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
