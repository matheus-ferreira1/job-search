import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { JobLocation, JobStatus, JobType } from "@prisma/client";

import { getJobsController } from "../useCases/getJobs/index.js";
import { getJobByIdController } from "../useCases/getJobById/index.js";
import { createJobController } from "../useCases/createJob/index.js";
import { deleteJobController } from "../useCases/deleteJob/index.js";
import { updateJobController } from "../useCases/updateJob/index.js";

const jobsRoutes = Router();

const JobLocationValues = Object.values(JobLocation);
const JobTypeValues = Object.values(JobType);
const JobStatusValues = Object.values(JobStatus);

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

jobsRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      position: Joi.string().required(),
      company: Joi.string().required(),
      jobLocation: Joi.string()
        .valid(...JobLocationValues)
        .required()
        .messages({
          "any.only": "Invalid job location",
        }),
      jobType: Joi.string()
        .valid(...JobTypeValues)
        .required()
        .messages({
          "any.only": "Invalid job type",
        }),
      jobStatus: Joi.string()
        .valid(...JobStatusValues)
        .required()
        .messages({
          "any.only": "Invalid job status",
        }),
      userId: Joi.string().uuid().required(),
    },
  }),
  (req, res) => {
    return createJobController.handle(req, res);
  }
);

jobsRoutes.put(
  "/:jobId",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jobId: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: {
      position: Joi.string().required(),
      company: Joi.string().required(),
      jobLocation: Joi.string()
        .valid(...JobLocationValues)
        .required()
        .messages({
          "any.only": "Invalid job location",
        }),
      jobType: Joi.string()
        .valid(...JobTypeValues)
        .required()
        .messages({
          "any.only": "Invalid job type",
        }),
      jobStatus: Joi.string()
        .valid(...JobStatusValues)
        .required()
        .messages({
          "any.only": "Invalid job status",
        }),
    },
  }),
  (req, res) => {
    return updateJobController.handle(req, res);
  }
);

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
