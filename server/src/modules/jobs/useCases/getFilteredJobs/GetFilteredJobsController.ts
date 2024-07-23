import { Request, Response } from "express";

import { GetFilteredJobsUseCase } from "./GetFilteredJobsUseCase.js";
import { JobLocationType, JobStatus, JobType } from "@prisma/client";

export class GetFilteredJobsController {
  constructor(private getFilteredJobsUseCase: GetFilteredJobsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.user;
    const { searchTerm, jobStatus, jobType, jobLocationType, sortBy } =
      request.query;

    const jobs = await this.getFilteredJobsUseCase.execute(
      userId,
      jobStatus as JobStatus,
      jobType as JobType,
      jobLocationType as JobLocationType,
      searchTerm as string,
      sortBy as string
    );
    return response.status(200).json(jobs);
  }
}
