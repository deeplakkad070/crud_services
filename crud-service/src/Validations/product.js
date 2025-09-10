import Joi from "joi";

export const productSchema = {
  create: Joi.object({
    productname: Joi.string().min(3).max(100).required().messages({
      "string.empty": "ProductName is required",
      "string.min": "ProductName must be at least 3 characters",
      "string.max": "ProductName must be less than or equal to 100 characters",
    }),
    description: Joi.string().optional(),
    subcategoryid: Joi.number().required().messages({
      "any.required": "SubcategoryId is required",
      "number.base": "SubcategoryId must be a number",
    }),
    price: Joi.number().required().messages({
      "any.required": "Price is required",
      "number.base": "Price must be a number",
    }),
    rating: Joi.number().optional(),
    quantity: Joi.number().required().messages({
        "any.required": "Quantity is required",
        "number.base": "Quantity must be a number",
      }),
  }),

  update: Joi.object({
    productname: Joi.string().min(3).max(100).optional(),
    subcategoryid: Joi.number().optional(),
    price: Joi.number().optional(),
    quantity: Joi.number().optional(),
    description: Joi.string().optional(),
    rating: Joi.number().optional(),
  }),
};
