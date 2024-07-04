import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "@prisma/client";
import { UserRepository } from "@modules/users/repository/UserRepository.js";
import AppError from "@shared/errors/AppError.js";

type LoginUserDTO = {
  email: string;
  password: string;
};

type IResponse = {
  user: User;
  token: string;
};

export class LoginUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: LoginUserDTO): Promise<IResponse> {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    return { user, token };
  }
}
