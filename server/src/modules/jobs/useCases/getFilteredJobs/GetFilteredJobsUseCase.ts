import { Job, JobLocationType, JobStatus, JobType } from "@prisma/client";

import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import AppError from "@shared/errors/AppError.js";

export class GetFilteredJobsUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute(
    userId: string,
    jobStatus?: JobStatus,
    jobType?: JobType,
    jobLocationType?: JobLocationType,
    searchTerm?: string,
    sortBy?: string
  ): Promise<Job[]> {
    if (!userId) {
      throw new AppError("Failed to verify access token teste controller", 401);
    }

    return await this.jobRepository.getFilteredJobs({
      userId,
      jobStatus,
      jobType,
      jobLocationType,
      searchTerm,
      sortBy,
    });
  }
}
