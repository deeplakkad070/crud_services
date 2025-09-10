import { DataTypes } from "sequelize";
import sequelize from "../db-config.js";

export const defineTutorialModel = {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
};

export const tutorialModel = sequelize.define("tutorial", {
  ...defineTutorialModel,
});
