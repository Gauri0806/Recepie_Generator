import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./src/routes/users.js";
import { recipesRouter } from "./src/routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://gaurikulkarni0806:ewoOcjlGinB7xRxk@cluster0.owih9.mongodb.net/"
).then(console.log("Database connected successfully.")
);

app.listen(3001, () => console.log("server started at port 3001"));
