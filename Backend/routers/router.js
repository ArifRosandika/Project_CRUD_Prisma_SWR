import express from "express";
import { getProduct, getProductId, createProduct, updateProduct, deleteProduct } from "../controller/controllerProduct.js";

const router = express.Router();

router.get("/product", getProduct);
router.get("/product/:id", getProductId);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;