import { DataTypes } from "sequelize";
import sequelize from "../db-config.js";
import { productModal } from "./product.js";

export const defineSubcategoryModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subcategory: {
    type: DataTypes.STRING,
  },
  categoryid: {
    type: DataTypes.INTEGER,
  },
  isdelete: {
    type: DataTypes.BOOLEAN,
  },
};

export const subcategoryModel = sequelize.define(
  "subcategory",
  {
    ...defineSubcategoryModel,
  },
  {
    tableName: "subcategory",
    timestamps: false,
  }
);

  subcategoryModel.hasMany(productModal, {
    foreignKey: "subcategoryid",
    as: "subcategories",
  });
  
  productModal.belongsTo(subcategoryModel, {
    foreignKey: "subcategoryid",
    targetKey: "id",
    as: "subcategory",
  });