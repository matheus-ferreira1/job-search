import { Request, Response } from "express";
import { GetJobStatsUsecase } from "./GetJobStatsUsecase.js";

export class GetJobStatsController {
  constructor(private getJobStatsUseCase: GetJobStatsUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.user;

    const stats = await this.getJobStatsUseCase.execute(userId);

    return response.status(200).json(stats);
  }
}
