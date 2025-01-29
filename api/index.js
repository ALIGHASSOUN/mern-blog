import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connnected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3002, () => {
  console.log("server is runing on port 3002");
});
