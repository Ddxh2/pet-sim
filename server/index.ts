import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT: string = process.env.PORT || "5000";
const MONGODB: any = process.env.MONGODB;

const server = express();

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Mongo DB Connected");
    return server.listen({ port: PORT });
  })
  .then(() => console.log(`Server running at port ${PORT}.`))
  .catch((error) => console.error(error));
