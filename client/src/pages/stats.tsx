import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Navigate } from "react-router-dom";
import { Check, Clock, FileX, User } from "lucide-react";

import { api } from "@/lib/axios";

import { StatsCard } from "@/components/stats-card";
import { Chart } from "@/components/chart";
import { Loading } from "@/components/loading";

type DefaultStatsTypes = {
  approved: number;
  declined: number;
  interview: number;
  pending: number;
};

export type MonthlyApplicationsTypes = {
  date: string;
  count: number;
};

type Stats = {
  defaultStats: DefaultStatsTypes;
  monthlyApplications: MonthlyApplicationsTypes[];
};

const Stats: FC = () => {
  const {
    isPending,
    isError,
    error,
    data: stats,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const response = await api.get("/jobs/stats");
      return response.data as Stats;
    },
  });

  if (isError) {
    toast.error(error.message);
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Stats</h1>
        <p className="text-gray-500">
          Here you can see the stats of your applications.
        </p>
      </div>
      {isPending ? (
        <Loading />
      ) : stats ? (
        <>
          <header className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              label="Approved"
              value={stats.defaultStats.approved}
              icon={<Check />}
            />
            <StatsCard
              label="Pending"
              value={stats.defaultStats.pending}
              icon={<Clock />}
            />
            <StatsCard
              label="Interview"
              value={stats.defaultStats.interview}
              icon={<User />}
            />
            <StatsCard
              label="Declined"
              value={stats.defaultStats.declined}
              icon={<FileX />}
            />
          </header>
          <div>
            <h2 className="text-2xl font-bold">Monthly Applications</h2>
            <Chart data={stats.monthlyApplications} />
          </div>
        </>
      ) : (
        <h2 className="text-2xl font-bold">No applications found</h2>
      )}
    </section>
  );
};

export default Stats;
