import { Logo } from "./logo";
import { ThemeModeToggle } from "./mode-toggle";
import { SmallSidebar } from "./small-sidebar";
import { UserMenu } from "./user-menu";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-background py-3 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-0">
          <SmallSidebar />
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <ThemeModeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
