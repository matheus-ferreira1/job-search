import { Job } from "@prisma/client";

import { CreateJobDTO } from "@modules/jobs/repository/IJobRepository.js";
import { JobRepository } from "@modules/jobs/repository/JobRepository.js";

export class CreateJobUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(data: CreateJobDTO): Promise<Job> {
    const job = await this.jobRepository.createJob(data);
    return job;
  }
}
