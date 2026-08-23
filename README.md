🧢 Hood & Diamond

📖 **Descripción**

Hood & Diamond es un e-commerce desarrollado como proyecto personal y final del curso de Backend 1.

La aplicación permite:

Visualizar un catálogo de gorras deportivas.
Filtrar productos por categoría.
Consultar el detalle de cada producto.
Administrar un carrito de compras.
Actualizar el stock en tiempo real mediante MongoDB Atlas.
Finalizar la compra mediante un proceso de Checkout, generando una orden en la base de datos.

El proyecto fue desarrollado bajo una arquitectura Full Stack, utilizando React para el frontend y Node.js + Express para el backend.

🚀 **Tecnologías utilizadas**

# Frontend

React
JavaScript (ES6)
React Router DOM
Bootstrap 5
SweetAlert2
React Icons
CSS3

# Backend

Node.js
Express
MongoDB Atlas
Mongoose
CORS
Dotenv
✨ **Funcionalidades**

Catálogo de productos.
Filtrado por categorías.
Vista detallada de cada producto.
Carrito de compras.
Incremento y disminución de cantidades.
Eliminación de productos (con confirmación).
Actualización automática del stock.
Persistencia de datos en MongoDB Atlas.
Checkout de compra con generación de órdenes.
API REST para administrar productos y órdenes.
📂 Estructura del proyecto

**Proyectoecommerce-HoodDiamond** 
│
├── backend
│   ├── models
│   │   ├── Productos.js
│   │   └── Orden.js
│   ├── server.js
│   ├── cargarDatos.js
│   ├── productos.json
│   ├── package.json
│   ├── .env.example
│   └── .env              (no se sube al repositorio)
│
├── public
│
├── src
│   ├── components
│   ├── service
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── package.json
└── README.md

⚙️ **Instalación**

Clonar el repositorio

bash
git clone https://github.com/CJRO77/Proyectoecommerce-HoodDiamond.git

Instalar dependencias

# Frontend:

bash
npm install

# Backend:

bash
cd backend
npm install

🌐 **Configuración de MongoDB Atlas**

Dentro de la carpeta backend hay un archivo .env.example con la variable necesaria. Copialo y renombralo a .env:

bash
cd backend
cp .env.example .env

Luego editá .env y reemplazá el valor de ejemplo por tu cadena de conexión real de MongoDB Atlas:

MONGO_URI=mongodb+srv://usuario:contraseña@cluster0.xxxxx.mongodb.net/HoodDiamond?appName=Cluster0

Importante: el archivo .env no se incluye en el repositorio porque contiene información privada (está en .gitignore). Solo .env.example se sube, como plantilla.

▶️ **Ejecutar el proyecto**

# Backend

bash
cd backend
npm start

o

bash
node server.js

Servidor disponible en: http://localhost:3000

# Frontend

Desde la carpeta principal:

bash
npm run dev

Aplicación disponible en: http://localhost:5173

🔗 **Endpoints disponibles**

Método	Endpoint	Descripción
GET	/productos	Obtener todos los productos
GET	/productos/:id	Obtener un producto por ID
POST	/productos	Crear un producto
PUT	/productos/:id	Actualizar un producto
DELETE	/productos/:id	Eliminar un producto
POST	/ordenes	Crear una nueva orden (checkout)
GET	/ordenes	Obtener todas las órdenes registradas

Estos endpoints permiten realizar el CRUD completo de productos, además de registrar y consultar órdenes de compra, todo almacenado en MongoDB Atlas.

📦 **Dependencias principales**

# Frontend

React
React Router DOM
Bootstrap
SweetAlert2
React Icons

# Backend

Express
Mongoose
Dotenv
CORS

👨‍💻 **Autor**

Carlos Jonathan Rodriguez Osorio

Proyecto desarrollado como entrega final del curso de Backend 1

📌 **Observaciones**

Este proyecto fue desarrollado con fines educativos para poner en práctica los conocimientos adquiridos durante el curso de Backend 1, integrando un frontend moderno con React, un backend construido con Express y una base de datos MongoDB Atlas mediante Mongoose.

## 📄 Licencia

Todos los derechos reservados. Este proyecto es de uso personal y no está autorizado su uso, copia o distribución sin permiso expreso del autor.