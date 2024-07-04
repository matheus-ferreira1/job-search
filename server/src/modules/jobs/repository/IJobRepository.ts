import { Job, JobLocation, JobStatus, JobType } from "@prisma/client";

export type CreateJobDTO = {
  position: string;
  company: string;
  jobLocation: JobLocation;
  jobType: JobType;
  jobStatus: JobStatus;
};

export interface IJobRepository {
  getJobs(): Promise<Job[]>;
  getJobById(jobId: string): Promise<Job | null>;
  createJob(data: CreateJobDTO): Promise<Job>;
}
