import { Job, JobLocationType, JobStatus, JobType } from "@prisma/client";

export type CreateJobDTO = {
  position: string;
  company: string;
  jobLocation?: string;
  jobLocationType: JobLocationType;
  jobType: JobType;
  jobStatus: JobStatus;
  userId: string;
};

export type JobStatusStats = {
  jobStatus: string;
  _count: { _all: number };
};

export type MonthlyApplicationsStats = {
  date: string;
  count: number;
};

export interface IJobRepository {
  getJobs(userId: string): Promise<Job[]>;
  getJobById(jobId: string, userId: string): Promise<Job | null>;
  createJob(data: CreateJobDTO): Promise<Job>;
  updateJob(jobId: string, data: CreateJobDTO): Promise<Job>;
  deleteJob(jobId: string): Promise<void>;
  countJobs(): Promise<number>;
  getJobStatsByUser(userId: string): Promise<JobStatusStats[]>;
  getMonthlyApplicationsStats(
    userId: string
  ): Promise<MonthlyApplicationsStats[]>;
}
