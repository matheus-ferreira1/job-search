import { Request, Response } from "express";

import { GetApplicationStatsUsecase } from "./GetApplicationStatsUsecase.js";

export class GetApplicationStatsController {
  constructor(private getApplicationStatsUsecase: GetApplicationStatsUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { role } = request.user;

    const stats = await this.getApplicationStatsUsecase.execute(role);

    return response.status(200).json(stats);
  }
}
