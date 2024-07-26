import { FC } from "react";
import { LoaderFunction, redirect, useNavigation } from "react-router-dom";

import { api } from "@/lib/axios";
import { JobsProvider } from "@/contexts/jobs-context";

import { JobsList } from "@/components/jobs-list";
import { SearchBar } from "@/components/search-bar";
import { Separator } from "@/components/ui/separator";
import { Loading } from "@/components/loading";

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    if (Object.keys(params).length > 0) {
      const response = await api.get("/jobs/filter", { params });

      return response.data;
    } else {
      const response = await api.get("/jobs");

      return response.data;
    }
  } catch (err) {
    console.log(err);
    // @ts-expect-error catching error
    toast.error(err.response.data.message);
    return redirect("/");
  }
};

const AllJobs: FC = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <JobsProvider>
      <SearchBar />
      <Separator className="my-4" />
      {isPageLoading ? <Loading /> : <JobsList />}
    </JobsProvider>
  );
};

export default AllJobs;
