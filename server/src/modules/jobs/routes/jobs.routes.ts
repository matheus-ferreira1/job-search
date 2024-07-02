import { Router } from "express";

const productsRoutes = Router();

productsRoutes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});
