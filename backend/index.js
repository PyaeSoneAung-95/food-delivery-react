import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

dotEnv.config();
const db_url = process.env.DB_URL;

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
    app.listen(8000, () => console.log("Application running on port 8000"));
  })
  .catch((error) => console.log("Database connection error:", error));
