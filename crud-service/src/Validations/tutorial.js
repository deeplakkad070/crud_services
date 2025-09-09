import Joi from "joi";

export const tutorialSchema = {
  create: Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Title is required",
      "string.min": "Title must be at least 3 characters",
      "string.max": "Title must be less than or equal to 100 characters",
    }),
    description: Joi.string().max(255).allow("").messages({
      "string.max": "Description must be less than or equal to 255 characters",
    }),
    published: Joi.boolean().default(false),
  }),

  update: Joi.object({
    title: Joi.string().min(3).max(100).optional(),
    description: Joi.string().max(255).optional(),
    published: Joi.boolean().optional(),
  }),
};