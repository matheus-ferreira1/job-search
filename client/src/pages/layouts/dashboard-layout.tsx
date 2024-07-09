/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import {
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

import { api } from "@/lib/axios";

import { DashboardHeader } from "@/components/dashboard-header";
import { LargeSidebar } from "@/components/large-sidebar";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: string;
  location: string;
}

interface DashboardContextProps {
  user: User | null;
  handleLogout: () => void;
}

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

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { email, id, lastName, location, name, role } = useLoaderData() as User;
  const user = { email, id, lastName, location, name, role };

  const handleLogout = async () => {
    await api.get("/auth/logout");
    navigate("/");
    toast.success("User logged out");
    console.log("User logged out");
  };

  return (
    <DashboardContext.Provider value={{ user, handleLogout }}>
      <div className="flex min-h-screen w-full">
        <LargeSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <Outlet context={{ user }} />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
};

export default DashboardLayout;
