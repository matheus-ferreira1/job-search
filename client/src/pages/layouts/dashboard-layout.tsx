import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";

import { DashboardHeader } from "@/components/dashboard-header";
import { LargeSidebar } from "@/components/large-sidebar";

interface User {
  name: string;
  role: string;
}

interface DashboardContextProps {
  user: User | null;
  logoutUser: () => void;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

const DashboardLayout = () => {
  const user = { name: "John Doe", role: "admin" };

  const logoutUser = () => {
    console.log("User logged out");
  };

  return (
    <DashboardContext.Provider value={{ user, logoutUser }}>
      <div className="flex min-h-screen w-full">
        <LargeSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
