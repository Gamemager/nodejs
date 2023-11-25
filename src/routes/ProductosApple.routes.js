import { Router } from "express";
const router = Router();

import { getProductosApple ,getProductoApple ,createProductoApple, deleteProductoApple, updateProductoApple } from "../controllers/ProductosApple.controller.js";

router.get ('/productosApple', getProductosApple);

router.get ('/productoApple/:id', getProductoApple);

router.post ('/productoApple', createProductoApple);

router.patch ('/productoApple/:id', deleteProductoApple);

router.delete ('/productoApple/:id', updateProductoApple);

export default router