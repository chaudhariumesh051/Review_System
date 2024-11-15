import express, { Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "./config/database.js";
import User from "./model/user.js";
import router from "./routes/feedbackRoutes.js";

router

const app = express();

dotenv.config();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1",Router);
dbConnect();







app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`);
});
