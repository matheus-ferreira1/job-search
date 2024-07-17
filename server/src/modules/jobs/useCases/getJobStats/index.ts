import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { GetJobStatsUsecase } from "./GetJobStatsUsecase.js";
import { GetJobStatsController } from "./GetJobStatsController.js";

const jobRepository = JobRepository.getInstance();
const getJobStatsUseCase = new GetJobStatsUsecase(jobRepository);
export const getJobStatsController = new GetJobStatsController(
  getJobStatsUseCase
);
