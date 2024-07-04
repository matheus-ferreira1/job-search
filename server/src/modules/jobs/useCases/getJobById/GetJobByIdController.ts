import { Request, Response } from "express";

import { GetJobByIdUsecase } from "./GetJobByIdUsecase.js";

export class GetJobByIdController {
  constructor(private getJobByIdUseCase: GetJobByIdUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { jobId } = request.params;

    const job = await this.getJobByIdUseCase.execute(jobId);

    return response.status(200).json(job);
  }
}
