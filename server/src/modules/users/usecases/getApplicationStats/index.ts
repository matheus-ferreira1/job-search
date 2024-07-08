import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { UserRepository } from "@modules/users/repository/UserRepository.js";
import { GetApplicationStatsUsecase } from "./GetApplicationStatsUsecase.js";
import { GetApplicationStatsController } from "./GetApplicationStatsController.js";

const userRepository = UserRepository.getInstance();
const jobRepository = JobRepository.getInstance();

const getApplicationStatsUsecase = new GetApplicationStatsUsecase(
  userRepository,
  jobRepository
);
export const getApplicationStatsController = new GetApplicationStatsController(
  getApplicationStatsUsecase
);
