import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { UpdateJobUsecase } from "./UpdateJobUsecase.js";
import { UpdateJobController } from "./UpdateJobController.js";

const jobRepository = JobRepository.getInstance();
const updateJobUseCase = new UpdateJobUsecase(jobRepository);
export const updateJobController = new UpdateJobController(updateJobUseCase);
