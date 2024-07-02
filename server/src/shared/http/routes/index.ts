import { Router } from "express";

import { jobsRoutes } from "@modules/jobs/routes/jobs.routes.js";

const routes = Router();

routes.use("/jobs", jobsRoutes);

export { routes };
