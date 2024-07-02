import { Job } from "@prisma/client";

import { IJobRepository } from "./IJobRepository.js";
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
}
