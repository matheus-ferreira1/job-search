import { Job, JobLocation, JobStatus, JobType } from "@prisma/client";

export type CreateJobDTO = {
  position: string;
  company: string;
  jobLocation: JobLocation;
  jobType: JobType;
  jobStatus: JobStatus;
  userId: string;
};

export interface IJobRepository {
  getJobs(userId: string): Promise<Job[]>;
  getJobById(jobId: string, userId: string): Promise<Job | null>;
  createJob(data: CreateJobDTO): Promise<Job>;
  updateJob(jobId: string, data: CreateJobDTO): Promise<Job>;
  deleteJob(jobId: string): Promise<void>;
  countJobs(): Promise<number>;
}
