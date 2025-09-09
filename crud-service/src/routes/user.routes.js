import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { userSchema } from "../Validations/user.js";
import { celebrate, Segments } from "celebrate";

const router = Router();

router.post(
  "/register",
  celebrate({ [Segments.BODY]: userSchema.create }),
  register
);

router.post(
  "/login",
  celebrate({ [Segments.BODY]: userSchema.loginSchema }),
  login
);

export const userRouter = router;
