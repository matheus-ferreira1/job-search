import express from "express";
import cookieParser from "cookie-parser";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import { errors } from "celebrate";

import routes from "./routes/index.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(routes);

app.use(errors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
