import { DataTypes } from "sequelize";
import sequelize from "../db-config.js";

export const defineUserModel = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
};

export const userModel = sequelize.define("user", {
    ...defineUserModel,
  }, {
    tableName: "user",
    timestamps: false
  });
