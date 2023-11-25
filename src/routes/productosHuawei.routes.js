import { Router } from "express";
const router = Router();

import { getProductosHuawei ,getProductoHuawei ,createProductoHuawei, updateProductoHuawei, deleteProductoHuawei } from "../controllers/ProductosHuawei.controller.js";

router.get ('/productosHuawei', getProductosHuawei);

router.get ('/productoHuawei/:id', getProductoHuawei);

router.post ('/productoHuawei', createProductoHuawei);

router.patch ('/productoHuawei/:id', updateProductoHuawei);

router.delete ('/productoHuawei/:id', deleteProductoHuawei);

export default router