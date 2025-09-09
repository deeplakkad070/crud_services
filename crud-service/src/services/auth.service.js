import * as userRepository from "../repositories/auth.repository.js";
import bcrypt from "bcryptjs";

import  sequelize from '../sequalize/db-config.js'

export const isUserExists = async (user) => {
  // const temp   = await getTables();
  // console.log(temp);
  const existingUser = await userRepository.findUserByUsername(user.username);
  if (existingUser) {
    return true;
  } else {
    const hashedPassword = bcrypt.hashSync(user.password, 8);
    const userObj = {
      username: user.username,
      password: hashedPassword,
      role: user.role || "admin",
    };
    await userRepository.createUser(userObj);
    return false;
  }
};

export const isValidUser = async (user) => {
  const userObj = await userRepository.getUserByUsername(user.username);
  if (userObj != null) {
    return bcrypt.compareSync(user.password, userObj.password);
  } else {
    return false;
  }
};

export const getUserByUsername = async (username) => {
  return await userRepository.getUserByUsername(username);
};


export const getTables = async (req, res) => {
  try {
    const [tables] = await sequelize.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_type = 'BASE TABLE'
      AND table_schema NOT IN ('pg_catalog', 'information_schema');
    `);

    res.json({ success: true, tables });
  } catch (error) {
    console.error('Error fetching tables:', error);
    res.status(500).json({ success: false, message: 'Error fetching tables', error });
  }
};