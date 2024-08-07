import { Job, JobLocationType, JobStatus, JobType } from "@prisma/client";

import { prisma } from "@config/prisma.js";
import {
  CreateJobDTO,
  IJobRepository,
  JobStatusStats,
  MonthlyApplicationsStats,
} from "./IJobRepository.js";

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
      orderBy: {
        createdAt: "desc",
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

  async getJobStatsByUser(userId: string): Promise<JobStatusStats[]> {
    const jobStats = await prisma.job.groupBy({
      by: ["jobStatus"],
      where: {
        userId,
      },
      _count: {
        _all: true,
      },
    });

    return jobStats.map((stat) => ({
      jobStatus: stat.jobStatus,
      _count: { _all: stat._count._all },
    }));
  }

  async getMonthlyApplicationsStats(
    userId: string
  ): Promise<MonthlyApplicationsStats[]> {
    const data = await prisma.$queryRaw<MonthlyApplicationsStats[]>`
      SELECT 
        TO_CHAR(DATE_TRUNC('month', "createdAt"), 'YYYY-MM') AS date,
        COUNT(*) AS count
      FROM "Job"
      WHERE "userId" = ${userId}
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY DATE_TRUNC('month', "createdAt") DESC
      LIMIT 6
    `;

    return data.map((stat) => ({
      date: stat.date,
      count: Number(stat.count),
    }));
  }

  async getFilteredJobs({
    userId,
    jobStatus,
    jobType,
    jobLocationType,
    searchTerm,
    sortBy,
  }: {
    userId: string;
    jobStatus?: JobStatus;
    jobType?: JobType;
    jobLocationType?: JobLocationType;
    searchTerm?: string;
    sortBy?: string;
  }): Promise<Job[]> {
    const where: any = {
      userId,
    };

    if (jobStatus) {
      where.jobStatus = jobStatus;
    }

    if (jobType) {
      where.jobType = jobType;
    }

    if (jobLocationType) {
      where.jobLocationType = jobLocationType;
    }

    if (searchTerm) {
      where.position = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    let orderBy: any = [];

    if (sortBy) {
      switch (sortBy) {
        case "newest":
          orderBy.push({ createdAt: "desc" });
          break;
        case "oldest":
          orderBy.push({ createdAt: "asc" });
          break;
        case "a-z":
          orderBy.push({ position: "asc" });
          break;
        case "z-a":
          orderBy.push({ position: "desc" });
          break;
        default:
          break;
      }
    }

    const jobs = await prisma.job.findMany({
      where,
      orderBy,
    });

    return jobs;
  }
}
