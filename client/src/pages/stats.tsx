import { FC } from "react";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import { Check, Clock, FileX, User } from "lucide-react";

import { api } from "@/lib/axios";

import { StatsCard } from "@/components/stats-card";
import { Chart } from "@/components/chart";

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

// eslint-disable-next-line react-refresh/only-export-components
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

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Stats</h1>
        <p className="text-gray-500">
          Here you can see the stats of your applications.
        </p>
      </div>
      <header className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          label="Approved"
          value={defaultStats.approved}
          icon={<Check />}
        />
        <StatsCard
          label="Pending"
          value={defaultStats.pending}
          icon={<Clock />}
        />
        <StatsCard
          label="Interview"
          value={defaultStats.interview}
          icon={<User />}
        />
        <StatsCard
          label="Declined"
          value={defaultStats.declined}
          icon={<FileX />}
        />
      </header>
      <div>
        <h2 className="text-2xl font-bold">Monthly Applications</h2>
        <Chart data={monthlyApplications} />
      </div>
    </section>
  );
};

export default Stats;
