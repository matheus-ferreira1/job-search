import { Router } from "express";

import { getJobsController } from "../useCase/index.js";

const jobsRoutes = Router();

jobsRoutes.get("/", (req, res) => {
  return getJobsController.handle(req, res);
});

export { jobsRoutes };
