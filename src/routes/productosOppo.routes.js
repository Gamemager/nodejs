import { Router } from "express";
const router = Router();

import { getProductosOppo ,getProductoOppo ,createProductoOppo, deleteProductoOppo, updateProductoOppo } from "../controllers/ProductosOppo.controller.js";

router.get ('/productosOppo', getProductosOppo);

router.get ('/productoOppo/:id', getProductoOppo);

router.post ('/productoOppo', createProductoOppo);

router.patch ('/productoOppo/:id', deleteProductoOppo);

router.delete ('/productoOppo/:id', updateProductoOppo);

export default router