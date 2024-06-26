import { DashboardHeader } from "@/components/dashboard-header";
import { LargeSidebar } from "@/components/large-sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const user = { name: "John Doe", role: "admin" };
  console.log(user);

  return (
    <div className="flex min-h-screen w-full">
      <LargeSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
