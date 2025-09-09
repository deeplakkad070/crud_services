import { Router } from "express";
import {
  manageTutorial,
  getAllTutorials,
  getTutorial,
  deleteTutorial,
  deleteAllTutorial,
  findTutorialPublished,
  addMulipleTutorial,
} from "../controllers/tutorial.controller.js";
import {verifyToken,isAdmin} from "../common/middleware/auth.js";

import { celebrate, Segments } from "celebrate";
import { tutorialSchema } from "../Validations/tutorial.js";

const router = Router();

router.post(
  "/",verifyToken, isAdmin,
  celebrate({ [Segments.BODY]: tutorialSchema.create }),
  manageTutorial
);
router.post(
  "/bulkCreate",verifyToken, isAdmin,
  addMulipleTutorial
)

router.put(
  "/:id",verifyToken, isAdmin,
  celebrate({ [Segments.BODY]: tutorialSchema.update }),
  manageTutorial
);

router.get("/",verifyToken, getAllTutorials);
router.get("/published", findTutorialPublished);
router.get("/:id", getTutorial);
router.delete("/:id",verifyToken,isAdmin, deleteTutorial);
router.delete("/",verifyToken,isAdmin, deleteAllTutorial);

export const tutorialRouter = router;
