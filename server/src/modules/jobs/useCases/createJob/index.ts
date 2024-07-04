import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { CreateJobUsecase } from "./CreateJobUsecase.js";
import { CreateJobController } from "./CreateJobController.js";

const jobRepository = JobRepository.getInstance();
const createJobUseCase = new CreateJobUsecase(jobRepository);
export const createJobController = new CreateJobController(createJobUseCase);
