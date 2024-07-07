import { Request, Response } from "express";

import { GetJobByIdUsecase } from "./GetJobByIdUsecase.js";
import AppError from "@shared/errors/AppError.js";

export class GetJobByIdController {
  constructor(private getJobByIdUseCase: GetJobByIdUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { jobId } = request.params;

    const { userId } = request.user;

    const job = await this.getJobByIdUseCase.execute(jobId, userId);

    return response.status(200).json(job);
  }
}
