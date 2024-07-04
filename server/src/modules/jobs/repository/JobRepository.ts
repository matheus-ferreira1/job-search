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

  async getJobs(): Promise<Job[]> {
    const jobs = await prisma.job.findMany();
    return jobs;
  }

  async getJobById(id: string): Promise<Job | null> {
    const job = await prisma.job.findUnique({
      where: {
        id,
      },
    });

    return job;
  }

  async createJob({
    company,
    jobLocation,
    jobStatus,
    jobType,
    position,
  }: CreateJobDTO): Promise<Job> {
    const job = await prisma.job.create({
      data: {
        company,
        jobLocation,
        jobStatus,
        jobType,
        position,
      },
    });

    return job;
  }
}
