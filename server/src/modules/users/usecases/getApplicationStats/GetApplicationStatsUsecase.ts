import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import { UserRepository } from "@modules/users/repository/UserRepository.js";
import AppError from "@shared/errors/AppError.js";

export class GetApplicationStatsUsecase {
  constructor(
    private userRepository: UserRepository,
    private jobRepository: JobRepository
  ) {}

  async execute(role: string) {
    if (role.toUpperCase() !== "ADMIN") {
      throw new AppError("Unauthorized", 401);
    }

    const totalUsers = await this.userRepository.countUsers();

    const totalJobs = await this.jobRepository.countJobs();

    return { totalUsers, totalJobs };
  }
}
