import { Router } from "express";

import { jobsRoutes } from "@modules/jobs/routes/jobs.routes.js";
import { authRoutes } from "@modules/users/http/auth.routes.js";
import { userRoutes } from "@modules/users/http/users.routes.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const routes = Router();

routes.use("/jobs", jobsRoutes);
routes.use("/auth", authRoutes);
routes.use("/users", isAuthenticated, userRoutes);

export { routes };
