import { Request, Response } from "express";

import { UpdateUserUsecase } from "./UpdateUserUsecase.js";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.user;
    const { name, lastName, email, password, location } = request.body;

    const user = await this.updateUserUseCase.execute(userId, {
      name,
      lastName,
      email,
      password,
      location,
    });

    return response.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      role: user.role,
    });
  }
}
