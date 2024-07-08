import { Request, Response } from "express";

import { GetCurrentUserUsecase } from "./GetCurrentUserUsecase.js";

export class GetCurrentUserController {
  constructor(private getCurrentUserUsecase: GetCurrentUserUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.user;

    const user = await this.getCurrentUserUsecase.execute(userId);

    return response.status(200).json(user);
  }
}
