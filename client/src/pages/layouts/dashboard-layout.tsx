/* eslint-disable react-refresh/only-export-components */
import { FC, useLayoutEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { api } from "@/lib/axios";
import { AuthProvider } from "@/contexts/auth-context";

import { DashboardHeader } from "@/components/dashboard-header";
import { LargeSidebar } from "@/components/large-sidebar";
import { isAxiosError } from "axios";

const userQuery = {
  queryKey: ["current-user"],
  queryFn: async () => {
    const response = await api.get("/users/current-user");
    return response.data;
  },
};

export const loader = (queryClient: QueryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (err) {
    toast.error((err as Error).message);
    return redirect("/");
  }
};

const DashboardLayout: FC = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          if (error.response?.status === 401) {
            navigate("/");
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <AuthProvider>
      <div className="flex min-h-screen w-full">
        <>
          <LargeSidebar />
          <div className="flex-1">
            <DashboardHeader />
            <div className="py-3 px-4 md:px-6">
              <Outlet />
            </div>
          </div>
        </>
      </div>
    </AuthProvider>
  );
};

export default DashboardLayout;
