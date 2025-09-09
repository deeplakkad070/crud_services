import { db } from "../sequalize/db-context.js";
const User = db.user;
import { Op, fn, col, where } from "sequelize";

export const findUserByUsername = async (username) => {
  //   const users = await sequelize.query(
  //     'SELECT * FROM "user" WHERE LOWER(username) = LOWER(:username)',
  //     {
  //       replacements: { username },
  //       plain:true
  //     }
  //   );
  //   return users[0].length > 0 ? true : false;
  // };
  const user = await User.findOne({
    where: where(fn("LOWER", col("username")), fn("LOWER", username)),
  });
  return !!user;
};

export const createUser = async (user) => {
  return await User.create(user);
};

export const getUserByUsername = async (username) => {
  const user = await User.findOne({
    where: {
      username: username,
    },
  });
  return user ? user.dataValues : null;
};
