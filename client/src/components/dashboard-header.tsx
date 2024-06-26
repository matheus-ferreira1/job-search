import { SmallSidebar } from "./small-sidebar";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-background px-4 py-3 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-0">
          <SmallSidebar />
          <h1 className="text-xl tracking-wide font-semibold">
            My Job Submissions
          </h1>
        </div>
        <div className="">
          <p>user</p>
        </div>
      </div>
    </header>
  );
};
