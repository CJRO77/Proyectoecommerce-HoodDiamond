require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Inicializar la app primero para que no dé el error "app is not defined"

const app = express();

app.use(cors());
app.use(express.json());

//Importar el modelo con control de errores por si las dudas

let Producto;
try {
  Producto = require("./models/Productos");
} catch (err) {
  console.error("Error al importar el modelo:", err.message);
  process.exit(1);
}

let Orden;
try {
  Orden = require("./models/Orden");
} catch (err) {
  console.error("Error al importar el modelo de Orden:", err.message);
  process.exit(1);
}

// Conexión a MongoDB Atlas con salvavidas

if (!process.env.MONGO_URI) {
  console.error(
    "ERROR CRÍTICO: No se encontró la variable MONGO_URI en el archivo .env",
  );
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
  .catch((err) =>
    console.error(" Error de conexión a MongoDB:", err.message),
  );

// Ruta de prueba básica

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente con MongoDB");
});

// Obtener todos los productos

app.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

// Obtener producto por ID

app.get("/productos/:id", async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto)
      return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar el producto" });
  }
});

// Crear nuevo producto

app.post("/productos", async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear producto" });
  }
});

// Actualizar producto

app.put("/productos/:id", async (req, res) => {
  try {
   const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
  returnDocument: "after",
});
    if (!producto)
      return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar producto" });
  }
});

// Eliminar producto

app.delete("/productos/:id", async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto)
      return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
});

// Crear nueva orden (checkout)

app.post("/ordenes", async (req, res) => {
  try {
    const nuevaOrden = new Orden(req.body);
    await nuevaOrden.save();
    res.status(201).json(nuevaOrden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar la orden" });
  }
});

// Obtener todas las órdenes (útil para un futuro panel de administración)

app.get("/ordenes", async (req, res) => {
  try {
    const ordenes = await Orden.find();
    res.json(ordenes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
});

// Iniciar el servidor

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});