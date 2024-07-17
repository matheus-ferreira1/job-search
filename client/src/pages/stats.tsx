import { FC } from "react";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import { FileLineChart } from "lucide-react";

import { api } from "@/lib/axios";
import { StatsCard } from "@/components/stats-card";

type DefaultStatsTypes = {
  approved: number;
  declined: number;
  interview: number;
  pending: number;
};

type MonthlyApplicationsTypes = {
  date: string;
  count: number;
};

type Stats = {
  defaultStats: DefaultStatsTypes;
  monthlyApplications: MonthlyApplicationsTypes[];
};

export const loader: LoaderFunction = async () => {
  try {
    const response = await api.get("/jobs/stats");
    return response.data;
  } catch (err) {
    console.log(err);
    // @ts-expect-error catching error
    toast.error(err.response.data.message);
    return redirect("/dashboard");
  }
};

const Stats: FC = () => {
  const { defaultStats, monthlyApplications } = useLoaderData() as Stats;
  console.log(monthlyApplications);

  return (
    <section>
      <header className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          label="Approved"
          value={defaultStats.approved}
          icon={<FileLineChart />}
        />
        <StatsCard
          label="Pending"
          value={defaultStats.pending}
          icon={<FileLineChart />}
        />
        <StatsCard
          label="Interview"
          value={defaultStats.interview}
          icon={<FileLineChart />}
        />
        <StatsCard
          label="Declined"
          value={defaultStats.declined}
          icon={<FileLineChart />}
        />
      </header>
    </section>
  );
};

export default Stats;
