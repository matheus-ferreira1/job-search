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
  handleLogout: () => void;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

const DashboardLayout = () => {
  const user = { name: "John Doe", role: "admin" };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <DashboardContext.Provider value={{ user, handleLogout }}>
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
