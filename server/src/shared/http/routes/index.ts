import { Router } from "express";

const routes = Router();

routes.use("/users", (req, res) => {
  return res.json({ message: "Hello World" });
});

export default routes;
