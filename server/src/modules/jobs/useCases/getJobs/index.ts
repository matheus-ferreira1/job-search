import { JobRepository } from "../../repository/JobRepository.js";
import { GetJobsController } from "./GetJobsController.js";
import { GetJobsUsecase } from "./GetJobsUsecase.js";

const jobRepository = JobRepository.getInstance();
const getJobsUsecase = new GetJobsUsecase(jobRepository);
export const getJobsController = new GetJobsController(getJobsUsecase);
