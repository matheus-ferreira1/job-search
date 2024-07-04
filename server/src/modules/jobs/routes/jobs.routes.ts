import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { getJobsController } from "../useCases/getJobs/index.js";
import { getJobByIdController } from "../useCases/getJobById/index.js";
import { createJobController } from "../useCases/createJob/index.js";
import { deleteJobController } from "../useCases/deleteJob/index.js";
import { updateJobController } from "../useCases/updateJob/index.js";

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

jobsRoutes.post("/", (req, res) => {
  return createJobController.handle(req, res);
});

jobsRoutes.put("/:jobId", (req, res) => {
  return updateJobController.handle(req, res);
});

jobsRoutes.delete(
  "/:jobId",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jobId: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return deleteJobController.handle(req, res);
  }
);

export { jobsRoutes };
