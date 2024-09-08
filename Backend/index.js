import express from "express";
import { connectDb } from "./db/index.js";
import { app } from "./app.js";

await connectDb();
app.listen(process.env.PORT || 8000, () => {
  console.log("server is listening to port 4000");
});
