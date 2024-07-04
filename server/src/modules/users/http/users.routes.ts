import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { createUserController } from "../usecases/createUser/index.js";
import { loginUserController } from "../usecases/loginUser/index.js";

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
    return loginUserController.handle(req, res);
  }
);

export { userRoutes };
