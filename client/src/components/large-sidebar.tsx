import { NavLink } from "react-router-dom";

import { dashboardLinks } from "@/constants/dashboard-links";

export const LargeSidebar = () => {
  return (
    <div className="hidden w-60 flex-col gap-4 border-r bg-background p-4 md:flex">
      {dashboardLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end
          className={({ isActive }) =>
            [
              "flex items-center gap-2 rounded-md px-3 py-2 font-medium",
              isActive ? "bg-muted" : "hover:bg-muted",
            ].join(" ")
          }
        >
          <link.Icon />
          <span>{link.text}</span>
        </NavLink>
      ))}
    </div>
  );
};
