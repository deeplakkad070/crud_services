import { DataTypes } from "sequelize";
import sequelize from "../db-config.js";
import { subcategoryModel } from "./subcategory.js";

export const defineCategoryModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING,
  },
  isdelete: {
    type: DataTypes.BOOLEAN,
  },
};

export const categoryModel = sequelize.define("category", {
    ...defineCategoryModel,
  }, {
    tableName: "category",
    timestamps: false
  });

  categoryModel.hasMany(subcategoryModel, {
    foreignKey: "categoryid",
    as: "subcategories",
  });
  
  subcategoryModel.belongsTo(categoryModel, {
    foreignKey: "categoryid",
    targetKey: "id",
    as: "category",
  });
  