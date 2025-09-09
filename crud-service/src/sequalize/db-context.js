import { Sequelize } from "sequelize";
import sequelize from "./db-config.js";
import { tutorialModel } from "./models/tutorial.js";
import { userModel } from "./models/user.js";
import { categoryModel } from "./models/category.js";
import { subcategoryModel } from "./models/subcategory.js";
import { productModal } from "./models/product.js";

export const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  tutorial: tutorialModel,
  user: userModel,
  category: categoryModel,
  subcategory: subcategoryModel,
  product: productModal,
};
