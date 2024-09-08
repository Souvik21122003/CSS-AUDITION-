import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
const app = express();

app.use(
  cors({
    origin: "https://css-audition-bfrx.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

import appRouter from "./routes/user.routes.js";

app.use("/api/v1/user", appRouter);

export { app };
