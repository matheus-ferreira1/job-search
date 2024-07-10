import { Request, Response } from "express";

import { UpdateJobUsecase } from "./UpdateJobUsecase.js";

export class UpdateJobController {
  constructor(private updateJobUseCase: UpdateJobUsecase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { jobId } = req.params;
    const {
      company,
      jobLocation,
      jobLocationType,
      jobStatus,
      jobType,
      position,
    } = req.body;
    const { userId } = req.user;

    const updatedJob = await this.updateJobUseCase.execute(jobId, {
      company,
      jobLocation,
      jobLocationType,
      jobStatus,
      jobType,
      position,
      userId,
    });

    return res.status(200).json(updatedJob);
  }
}
