import jwt from "jsonwebtoken";

const SECRET_KEY = "qwertyuiopasdfghjklzxcvbnm1234567890"; 

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).send({ message: "No token provided!" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send({ message: "Unauthorized!" });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (req.userRole !== "admin") {
    return res.status(403).send({ message: "Require Admin Role!" });
  }
  next();
};