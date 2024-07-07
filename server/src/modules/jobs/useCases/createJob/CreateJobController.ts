import { Request, Response } from "express";

import { CreateJobUsecase } from "./CreateJobUsecase.js";

export class CreateJobController {
  constructor(private createJobUseCase: CreateJobUsecase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { company, jobLocation, jobStatus, jobType, position } = req.body;

    const { userId } = req.user;

    const job = await this.createJobUseCase.execute({
      company,
      jobLocation,
      jobStatus,
      jobType,
      position,
      userId,
    });

    return res.status(201).json(job);
  }
}
