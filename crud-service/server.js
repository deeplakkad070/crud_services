import express from "express";
import router from "./src/routes/index.js";
import { errors } from "celebrate";
import errorHandler from "./src/common/middleware/errorHandler.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {   
  res.json({ message: "Welcome to crud_service application." });
});

app.use("/dev", router);
app.use(errors());
app.use(errorHandler);

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});



export default app;



