import { Job } from "@prisma/client";

import { CreateJobDTO, IJobRepository } from "./IJobRepository.js";
import { prisma } from "@config/prisma.js";

export class JobRepository implements IJobRepository {
  private static instance: JobRepository;

  private constructor() {}

  public static getInstance(): JobRepository {
    if (!JobRepository.instance) {
      JobRepository.instance = new JobRepository();
    }

    return JobRepository.instance;
  }

  async getJobs(userId: string): Promise<Job[]> {
    const jobs = await prisma.job.findMany({
      where: {
        userId,
      },
    });
    return jobs;
  }

  async getJobById(id: string, userId: string): Promise<Job | null> {
    const job = await prisma.job.findUnique({
      where: {
        id,
        userId,
      },
    });

    return job;
  }

  async createJob({
    company,
    jobLocation,
    jobLocationType,
    jobStatus,
    jobType,
    position,
    userId,
  }: CreateJobDTO): Promise<Job> {
    const job = await prisma.job.create({
      data: {
        company,
        jobLocation,
        jobLocationType,
        jobStatus,
        jobType,
        position,
        userId,
      },
    });

    return job;
  }

  async updateJob(
    jobId: string,
    { company, jobLocation, jobStatus, jobType, position, userId }: CreateJobDTO
  ): Promise<Job> {
    const job = await prisma.job.update({
      where: {
        id: jobId,
      },
      data: {
        company,
        jobLocation,
        jobStatus,
        jobType,
        position,
        userId,
      },
    });

    return job;
  }

  async deleteJob(jobId: string): Promise<void> {
    await prisma.job.delete({
      where: {
        id: jobId,
      },
    });
  }

  async countJobs(): Promise<number> {
    return await prisma.job.count();
  }
}
