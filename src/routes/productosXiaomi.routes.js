import { Router } from "express";
const router = Router();

import { getProductosXiaomi ,getProductoXiaomi ,createProductoXiaomi, deleteProductoXiaomi, updateProductoXiaomi } from "../controllers/ProductosXiaomi.controller.js";

router.get ('/productosXiaomi', getProductosXiaomi);

router.get ('/productoXiaomi/:id', getProductoXiaomi);

router.post ('/productoXiaomi', createProductoXiaomi);

router.patch ('/productoXiaomi/:id', deleteProductoXiaomi);

router.delete ('/productoXiaomi/:id', updateProductoXiaomi);

export default router