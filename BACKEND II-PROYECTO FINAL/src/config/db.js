// src/config/db.js
import mongoose from "mongoose";
import config from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("\u2705 Conectado a MongoDB correctamente");
  } catch (error) {
    console.error("\u274C Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};
