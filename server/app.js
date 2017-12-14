import express from 'express';
import routes from "./routes";
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017', () => {
  console.log('Connected to mongodb')
})

const app = express();

app.use("/api", routes)

export default app;