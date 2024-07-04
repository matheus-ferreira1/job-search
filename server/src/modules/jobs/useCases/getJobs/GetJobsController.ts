import { Request, Response } from "express";

import { GetJobsUsecase } from "./GetJobsUsecase.js";

export class GetJobsController {
  constructor(private getJobsUsecase: GetJobsUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const jobs = await this.getJobsUsecase.execute();

    return response.status(200).json(jobs);
  }
}
