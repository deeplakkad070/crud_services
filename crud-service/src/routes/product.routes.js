import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  serachProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { productSchema } from "../Validations/product.js";
import { celebrate, Segments } from "celebrate";

const router = Router();

router.post(
  "/product",
  celebrate({ [Segments.BODY]: productSchema.create }),
  createProduct
);

router.put(
  "/product/:id",
  celebrate({ [Segments.BODY]: productSchema.update }),
  updateProduct
);

router.post("/search", serachProduct);
router.put("/:id", deleteProduct);
router.get("/:id", getProduct);

export const productRouter = router;
