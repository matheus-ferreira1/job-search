import { FC } from "react";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";

import { api } from "@/lib/axios";
import { JobsProvider } from "@/contexts/jobs-context";

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
  return <JobsProvider>AllJobs</JobsProvider>;
};

export default AllJobs;
