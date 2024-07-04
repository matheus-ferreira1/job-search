import { Request, Response } from "express";

import { UpdateJobUsecase } from "./UpdateJobUsecase.js";

export class UpdateJobController {
  constructor(private updateJobUseCase: UpdateJobUsecase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { jobId } = req.params;
    const { company, jobLocation, jobStatus, jobType, position } = req.body;

    const updatedJob = await this.updateJobUseCase.execute(jobId, {
      company,
      jobLocation,
      jobStatus,
      jobType,
      position,
    });

    return res.status(200).json(updatedJob);
  }
}
