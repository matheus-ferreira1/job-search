import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { GetJobByIdUsecase } from "./GetJobByIdUsecase.js";
import { GetJobByIdController } from "./GetJobByIdController.js";

const jobRepository = JobRepository.getInstance();
const getJobByIdUseCase = new GetJobByIdUsecase(jobRepository);
export const getJobByIdController = new GetJobByIdController(getJobByIdUseCase);
