import Joi from "joi";

export const userSchema = {
   create: Joi.object({
    username: Joi.string().min(3).max(12).required().messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username must be less than or equal to 100 characters",
    }),
    password: Joi.string().min(3).max(10).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 3 characters",
        "string.max": "Password must be less than or equal to 10 characters",
    }),
    role: Joi.string().default("admin").valid("admin", "user").optional().messages({
  }),
  }),

 loginSchema:Joi.object({  
    username: Joi.string().min(3).max(12).required().messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username must be less than or equal to 100 characters",
    }),
    password: Joi.string().min(3).max(10).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 3 characters",
        "string.max": "Password must be less than or equal to 10 characters",
    }),
  }),
};

