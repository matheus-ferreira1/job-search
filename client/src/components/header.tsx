import { Link, NavLink } from "react-router-dom";

import { Icons } from "./icons";
import { ThemeModeToggle } from "./mode-toggle";
import { navLinks } from "@/constants/nav-links";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <Icons.briefcase className="h-6 w-6" />
        <span className="sr-only">Job Tracker</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <ThemeModeToggle />
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
