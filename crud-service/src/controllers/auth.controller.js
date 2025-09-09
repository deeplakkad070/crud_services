import * as userService from "../services/auth.service.js";
import jwt from "jsonwebtoken";
const SECRET_KEY = "qwertyuiopasdfghjklzxcvbnm1234567890";

// @summary::Register User::
// @description::This API will register user::
export const register = async (req, res, next) => {
  try {
    const isUserExists = await userService.isUserExists(req.body);
    if (isUserExists) {
      return next(error(`User already exists!`, 400));
    }
    return res.status(201).send({ message: "User registered successfully!" });
  } catch (err) {
    next(err);
  }
};

// @summary::Login User::
// @description::This API will login user and return JWT token::
export const login = async (req, res, next) => {
  try{
    const isValid = await userService.isValidUser(req.body);
    if (isValid) {
      const user = await userService.getUserByUsername(req.body.username);
      const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.send({ message: "Login successful", token });
    }

    return next(error(`Invalid username or password`, 401));

  } catch (err) {
    next(err);
  }
};
