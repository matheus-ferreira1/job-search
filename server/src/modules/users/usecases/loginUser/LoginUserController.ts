import { Request, Response } from "express";

import { LoginUserUsecase } from "./LoginUserUsecase.js";

export class LoginUserController {
  constructor(private loginUserUsecase: LoginUserUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { token, user } = await this.loginUserUsecase.execute({
      email,
      password,
    });

    const oneDay = 1000 * 60 * 60 * 24;

    return response
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
      })
      .status(201)
      .json({
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        location: user.location,
        role: user.role,
      });
  }
}
