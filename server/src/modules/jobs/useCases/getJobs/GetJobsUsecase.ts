import { Job } from "@prisma/client";

import { JobRepository } from "../../repository/JobRepository.js";

export class GetJobsUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(): Promise<Job[]> {
    return await this.jobRepository.getJobs();
  }
}
