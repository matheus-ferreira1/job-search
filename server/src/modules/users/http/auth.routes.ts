import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { createUserController } from "../usecases/createUser/index.js";
import { loginUserController } from "../usecases/loginUser/index.js";
import { logoutUserController } from "../usecases/logoutUser/LogoutUserController.js";

const authRoutes = Router();

authRoutes.post(
  "/register",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      location: Joi.string().optional(),
    },
  }),
  (req, res) => {
    return createUserController.handle(req, res);
  }
);

authRoutes.post(
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

authRoutes.get("/logout", (req, res) => {
  return logoutUserController.handle(req, res);
});

export { authRoutes };
