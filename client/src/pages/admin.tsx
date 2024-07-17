import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import { Captions, Users } from "lucide-react";

import { api } from "@/lib/axios";

import { StatsCard } from "@/components/stats-card";

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async () => {
  try {
    const { data } = await api.get("/users/admin/app-stats");

    return data;
  } catch (err) {
    console.log(err);
    // @ts-expect-error catching error
    toast.error(err.response.data.message);
    return redirect("/");
  }
};

const Admin: React.FC = () => {
  const { totalJobs, totalUsers } = useLoaderData() as {
    totalJobs: number;
    totalUsers: number;
  };

  return (
    <header className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard label="Total Jobs" value={totalJobs} icon={<Captions />} />
      <StatsCard label="Total Users" value={totalUsers} icon={<Users />} />
    </header>
  );
};

export default Admin;
