import { CreateJobDTO } from "@modules/jobs/repository/IJobRepository.js";
import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import AppError from "@shared/errors/AppError.js";

export class UpdateJobUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(
    jobId: string,
    { company, jobLocation, jobStatus, jobType, position, userId }: CreateJobDTO
  ) {
    const job = await this.jobRepository.getJobById(jobId, userId);

    if (!job) {
      throw new AppError("Job not found", 404);
    }

    const updatedJob = await this.jobRepository.updateJob(jobId, {
      company,
      jobLocation,
      jobStatus,
      jobType,
      position,
      userId,
    });

    return updatedJob;
  }
}
