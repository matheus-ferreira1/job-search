import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { JobLocationType, JobStatus, JobType } from "@prisma/client";

import { getJobsController } from "../useCases/getJobs/index.js";
import { getJobByIdController } from "../useCases/getJobById/index.js";
import { createJobController } from "../useCases/createJob/index.js";
import { deleteJobController } from "../useCases/deleteJob/index.js";
import { updateJobController } from "../useCases/updateJob/index.js";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated.js";
import { getJobStatsController } from "../useCases/getJobStats/index.js";

const jobsRoutes = Router();

const JobLocationTypesValues = Object.values(JobLocationType);
const JobTypeValues = Object.values(JobType);
const JobStatusValues = Object.values(JobStatus);

jobsRoutes.get("/", isAuthenticated, (req, res) => {
  return getJobsController.handle(req, res);
});

jobsRoutes.get("/stats", isAuthenticated, (req, res) => {
  return getJobStatsController.handle(req, res);
});

jobsRoutes.get(
  "/:jobId",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jobId: Joi.string().uuid().required(),
    }),
  }),
  isAuthenticated,
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
      jobLocation: Joi.optional().allow(""),
      jobLocationType: Joi.string()
        .valid(...JobLocationTypesValues)
        .required()
        .messages({
          "any.only": "Invalid job location type",
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
  isAuthenticated,
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
      jobLocation: Joi.optional().allow(""),
      jobLocationType: Joi.string()
        .valid(...JobLocationTypesValues)
        .required()
        .messages({
          "any.only": "Invalid job location type",
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
  isAuthenticated,
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
  isAuthenticated,
  (req, res) => {
    return deleteJobController.handle(req, res);
  }
);

export { jobsRoutes };
