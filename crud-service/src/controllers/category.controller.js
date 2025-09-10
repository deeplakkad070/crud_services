import * as categoryService from "../services/category.service.js";
import error from "../utils/error.js";

// @summary::Retrive List Of Subcategory::
// @description::This API will retive List Of Subcategory by Category Id::
export const getSubcategories = async (req, res, next) => {
  try {
    const subcategories = await categoryService.getSubcategories(req.body);
    if (!subcategories) {
      return next(error(`Subcategories not found`, 404));
    }
    return res.status(200).send(subcategories);
  } catch (err) {
    next(err);
  }
};
