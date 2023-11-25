import { Router } from "express";
const router = Router();

import { getProductosSamsung ,getProductoSamsung ,createProductoSamsung, deleteProductoSamsung, updateProductoSamsung } from "../controllers/ProductosSamsung.controller.js";

router.get ('/productosSamsung', getProductosSamsung);

router.get ('/productoSamsung/:id', getProductoSamsung);

router.post ('/productoSamsung', createProductoSamsung);

router.patch ('/productoSamsung/:id', deleteProductoSamsung);

router.delete ('/productoSamsung/:id', updateProductoSamsung);

export default router