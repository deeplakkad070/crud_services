import { DataTypes } from "sequelize";
import sequelize from "../db-config.js";

export const defineProductModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  subcategoryid:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  rating:{
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isdelete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
};

export const productModal = sequelize.define(
  "product",
  {
    ...defineProductModel,
  },
  {
    tableName: "product",
    timestamps: false,
  }
);
