import { Router } from "express";
import { createUserController } from "../usecases/createUser/index.js";
import { celebrate, Joi, Segments } from "celebrate";

const userRoutes = Router();

userRoutes.post(
  "/register",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  (req, res) => {
    return createUserController.handle(req, res);
  }
);

userRoutes.post(
  "/login",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (req, res) => {
    res.send("Hello, login!");
  }
);

export { userRoutes };
