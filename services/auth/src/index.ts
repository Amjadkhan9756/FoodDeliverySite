import express from "express";
import dotenv from "dotenv";
import AuthRoutes from "./routes/auth.js"
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;
app.use("/api/auth", AuthRoutes);













app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});