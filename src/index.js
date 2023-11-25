import express from "express";
import usuariosRoutes from "./routes/usuarios.routes.js";
import inventarioRoutes from "./routes/inventario.routes.js";
import ProductosSamsungRoutes from "./routes/ProductosSamsung.routes.js";
import ProductosAppleRoutes from "./routes/ProductosApple.routes.js";
import ProductosHuaweiRoutes from "./routes/productosHuawei.routes.js";
import ProductosMotorolaRoutes from "./routes/productosMotorola.routes.js"
import ProductosOppoRoutes from "./routes/productosOppo.routes.js";
import ProductosXiomiRoutes from "./routes/productosXiaomi.routes.js"
import { PORT } from "./config.js";
import cors from "cors";

const app = express();

// Lista blanca de orígenes permitidos (agrega más si es necesario)
const whitelist = [
  "http://localhost:4200",
  "angular-production-1a09.up.railway.app",
  "https://angular-production-1a09.up.railway.app",
];

// Opciones de configuración de CORS
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

// Habilitar CORS en la aplicación
app.use(cors(corsOptions));
app.use(express.json());

// Rutas de la API
app.use("/api", usuariosRoutes);
app.use("/api", inventarioRoutes);
app.use("/api", ProductosSamsungRoutes);
app.use("/api", ProductosAppleRoutes);
app.use("/api", ProductosHuaweiRoutes); 
app.use("/api", ProductosMotorolaRoutes);
app.use("/api", ProductosOppoRoutes);
app.use("/api", ProductosXiomiRoutes);




// Ruta no encontrada
app.use((req, res, next) => {
  res.status(404).json({
    message: "Ruta no encontrada",
  });
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log("Servidor en ejecución en el puerto", PORT);
});
