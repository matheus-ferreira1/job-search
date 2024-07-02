import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import "express-async-errors";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import { errors } from "celebrate";

import routes from "./routes/index.js";
import AppError from "@shared/errors/AppError.js";

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api", routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
