import { FC } from "react";
import { LoaderFunction, redirect } from "react-router-dom";

import { api } from "@/lib/axios";
import { JobsProvider } from "@/contexts/jobs-context";

import { JobsList } from "@/components/jobs-list";
import { SearchBar } from "@/components/search-bar";
import { Separator } from "@/components/ui/separator";

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
  return (
    <JobsProvider>
      <SearchBar />
      <Separator className="my-4" />
      <JobsList />
    </JobsProvider>
  );
};

export default AllJobs;
