import { Request, Response } from "express";

class LogoutUserController {
  constructor() {}

  async handle(request: Request, response: Response): Promise<Response> {
    return response
      .cookie("access_token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .status(200)
      .json({
        message: "User logged out successfully",
      });
  }
}

export const logoutUserController = new LogoutUserController();
