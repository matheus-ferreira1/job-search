import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import AppError from "@shared/errors/AppError.js";

export class GetJobByIdUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(jobId: string) {
    const job = await this.jobRepository.getJobById(jobId);

    if (!job) {
      throw new AppError("Job not found", 404);
    }

    return job;
  }
}
