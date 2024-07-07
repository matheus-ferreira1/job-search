import { Job } from "@prisma/client";

import { JobRepository } from "../../repository/JobRepository.js";
import AppError from "@shared/errors/AppError.js";

export class GetJobsUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(userId: string): Promise<Job[]> {
    if (!userId) {
      throw new AppError("Failed to verify access token teste controller", 401);
    }

    return await this.jobRepository.getJobs(userId);
  }
}
