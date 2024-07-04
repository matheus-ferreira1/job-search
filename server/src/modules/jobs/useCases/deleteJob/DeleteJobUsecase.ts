import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import AppError from "@shared/errors/AppError.js";

export class DeleteJobUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(jobId: string): Promise<void> {
    const job = await this.jobRepository.getJobById(jobId);

    if (!job) {
      throw new AppError("Job not found", 404);
    }

    await this.jobRepository.deleteJob(jobId);
  }
}
