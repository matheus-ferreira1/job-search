import { FC } from "react";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";

import { api } from "@/lib/axios";

type Job = {
  company: string;
  createdAt: Date;
  id: string;
  jobLocation: string;
  jobLocationType: string;
  jobStatus: string;
  jobType: string;
  position: string;
  updatedAt: Date;
  userId: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async () => {
  try {
    const response = await api.get("/jobs");

    return response.data;
  } catch (err) {
    console.log(err);
    // @ts-expect-error catching error
    toast.error(err.response.data.message);
    return redirect("/");
  }
};

const AllJobs: FC = () => {
  const { data } = useLoaderData() as { data: Job[] };

  return <div>AllJobs</div>;
};

export default AllJobs;
