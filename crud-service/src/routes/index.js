import { Router } from "express";
import {tutorialRouter} from "./tutorial.routes.js";
import { userRouter } from "./user.routes.js";
import { categoryRouter } from "./category.routes.js";
import { productRouter } from "./product.routes.js";
import { s3Router } from "./s3.routes.js";

const router = Router();
router.use('/tutorials', tutorialRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/s3',s3Router)

export default router;


