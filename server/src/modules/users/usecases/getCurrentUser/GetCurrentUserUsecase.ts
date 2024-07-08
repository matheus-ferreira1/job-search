import { UserRepository } from "@modules/users/repository/UserRepository.js";
import AppError from "@shared/errors/AppError.js";

type UserResponse = {
  id: string;
  name: string;
  email: string;
  lastName: string;
  location: string;
  role: string;
};

export class GetCurrentUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string): Promise<UserResponse> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      role: user.role,
    };
  }
}
