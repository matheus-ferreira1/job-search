import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { DeleteJobUsecase } from "./DeleteJobUsecase.js";
import { DeleteJobController } from "./DeleteJobController.js";

const jobRepository = JobRepository.getInstance();
const deleteJobUseCase = new DeleteJobUsecase(jobRepository);
export const deleteJobController = new DeleteJobController(deleteJobUseCase);
