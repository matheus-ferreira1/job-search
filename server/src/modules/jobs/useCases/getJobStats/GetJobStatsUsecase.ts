import dayjs from "dayjs";

import { JobRepository } from "@modules/jobs/repository/JobRepository.js";
import AppError from "@shared/errors/AppError.js";

interface DefaultStats {
  pending: number;
  interview: number;
  declined: number;
  approved: number;
}

interface MonthlyApplication {
  date: string;
  count: number;
}

interface StatsResult {
  defaultStats: DefaultStats;
  monthlyApplications: MonthlyApplication[];
}

export class GetJobStatsUsecase {
  constructor(private jobRepository: JobRepository) {}

  async execute(userId: string): Promise<StatsResult> {
    if (!userId) {
      throw new AppError("Failed to verify access token", 401);
    }

    const stats = await this.jobRepository.getJobStatsByUser(userId);

    const defaultStats: DefaultStats = {
      pending:
        stats.find((stat) => stat.jobStatus === "PENDING")?._count._all || 0,
      interview:
        stats.find((stat) => stat.jobStatus === "INTERVIEW")?._count._all || 0,
      declined:
        stats.find((stat) => stat.jobStatus === "DECLINED")?._count._all || 0,
      approved:
        stats.find((stat) => stat.jobStatus === "APPROVED")?._count._all || 0,
    };

    const monthlyApplicationsData =
      await this.jobRepository.getMonthlyApplicationsStats(userId);

    const monthlyApplications: MonthlyApplication[] =
      monthlyApplicationsData.reverse();

    return { defaultStats, monthlyApplications };
  }
}
