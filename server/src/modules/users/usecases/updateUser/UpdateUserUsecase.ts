import bcryptjs from "bcryptjs";

import { UserRepository } from "@modules/users/repository/UserRepository.js";
import AppError from "@shared/errors/AppError.js";

type UpdateUserProfileDTO = {
  name: string;
  lastName: string;
  email: string;
  location: string;
  password?: string;
  old_password?: string;
};

export class UpdateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    userId: string,
    {
      name,
      lastName,
      email,
      password,
      old_password,
      location,
    }: UpdateUserProfileDTO
  ) {
    const user = await this.userRepository.getUserById(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }

    const userUpdateEmail = await this.userRepository.findUserByEmail(email);
    if (userUpdateEmail && userUpdateEmail.id !== userId) {
      throw new AppError("Email already in use");
    }

    if (password && old_password) {
      const checkOldPassword = await bcryptjs.compare(
        old_password,
        user.password
      );
      if (!checkOldPassword) {
        throw new AppError("Old password does not match");
      }
      user.password = await bcryptjs.hash(password, 10);
    }

    const updatedUser = await this.userRepository.updateUser(userId, {
      name,
      email,
      lastName,
      password,
      location,
    });

    return updatedUser;
  }
}
