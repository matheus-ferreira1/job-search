import bcrypt from "bcryptjs";

import { CreateUserDTO } from "@modules/users/repository/IUserRepository.js";
import { UserRepository } from "@modules/users/repository/UserRepository.js";
import AppError from "@shared/errors/AppError.js";

export class CreateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, lastName, name, password, location }: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findUserByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("Email address already used");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.userRepository.createUser({
      email,
      lastName,
      name,
      location,
      password: hashedPassword,
    });

    return user;
  }
}
