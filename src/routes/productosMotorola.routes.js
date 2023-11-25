import { Router } from "express";
const router = Router();

import { getProductosMotorola ,getProductoMotorola ,createProductoMotorola, deleteProductoMotorola, updateProductoMotorola } from "../controllers/ProductosMotorola.controller.js";

router.get ('/productosMotorola', getProductosMotorola);

router.get ('/productoMorotola/:id', getProductoMotorola);

router.post ('/productoMorotola', createProductoMotorola);

router.patch ('/productoMorotola/:id', deleteProductoMotorola);

router.delete ('/productoMorotola/:id', updateProductoMotorola);

export default router