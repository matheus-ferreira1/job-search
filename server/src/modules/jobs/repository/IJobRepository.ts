import { Job } from "@prisma/client";

export interface IJobRepository {
  getJobs(): Promise<Job[]>;
}
