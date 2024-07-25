/* eslint-disable react-refresh/only-export-components */
import { FC } from "react";
import {
  LoaderFunction,
  Outlet,
  redirect,
  useNavigation,
} from "react-router-dom";
import { toast } from "sonner";

import { api } from "@/lib/axios";
import { AuthProvider } from "@/contexts/auth-context";

import { DashboardHeader } from "@/components/dashboard-header";
import { LargeSidebar } from "@/components/large-sidebar";
import { Loading } from "@/components/loading";

export const loader: LoaderFunction = async () => {
  try {
    const { data } = await api.get("/users/current-user");

    return data;
  } catch (err) {
    console.log(err);
    // @ts-expect-error catching error
    toast.error(err.response.data.message);
    return redirect("/");
  }
};

const DashboardLayout: FC = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <AuthProvider>
      <div className="flex min-h-screen w-full">
        <LargeSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <div className="py-3 px-4 md:px-6">
            {isPageLoading ? <Loading /> : <Outlet />}
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default DashboardLayout;
