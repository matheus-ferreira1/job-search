import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import AppError from "@shared/errors/AppError.js";

export class GetJobByIdUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(jobId: string, userId: string) {
    if (!userId) {
      throw new AppError("Failed to verify access token teste controller", 401);
    }

    const job = await this.jobRepository.getJobById(jobId, userId);

    if (!job) {
      throw new AppError("Job not found", 404);
    }

    return job;
  }
}
