import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { GetFilteredJobsUseCase } from "./GetFilteredJobsUseCase.js";
import { GetFilteredJobsController } from "./GetFilteredJobsController.js";

const jobRepository = JobRepository.getInstance();
const getFilteredJobsUseCase = new GetFilteredJobsUseCase(jobRepository);
export const getFilteredJobsController = new GetFilteredJobsController(
  getFilteredJobsUseCase
);
