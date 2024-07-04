import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { getJobsController } from "../useCases/getJobs/index.js";
import { getJobByIdController } from "../useCases/getJobById/index.js";

const jobsRoutes = Router();

jobsRoutes.get("/", (req, res) => {
  return getJobsController.handle(req, res);
});

jobsRoutes.get(
  "/:jobId",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jobId: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return getJobByIdController.handle(req, res);
  }
);

export { jobsRoutes };
