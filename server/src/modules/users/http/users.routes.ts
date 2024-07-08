import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { getCurrentUserController } from "../usecases/getCurrentUser/index.js";
import { updateUserController } from "../usecases/updateUser/index.js";

const userRoutes = Router();

userRoutes.get("/current-user", (req, res) => {
  return getCurrentUserController.handle(req, res);
});

userRoutes.put(
  "/update-user",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      location: Joi.string().optional(),
      password: Joi.string().optional(),
      oldPassword: Joi.string().optional(),
      passwordConfirmation: Joi.string().valid(Joi.ref("password")).optional(),
    },
  }),
  (req, res) => {
    return updateUserController.handle(req, res);
  }
);

export { userRoutes };
