import { Router } from "express";
import { getSubcategories } from "../controllers/category.controller.js";

const router = Router();

router.post("/search", getSubcategories);
export const categoryRouter = router;
