import { Request, Response } from "express";

import { CreateUserUsecase } from "./CreateUserUsecase.js";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, lastName, email, password } = request.body;

    const user = await this.createUserUseCase.execute({
      name,
      lastName,
      email,
      password,
    });

    return response.status(201).json({
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
      role: user.role,
    });
  }
}
