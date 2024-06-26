import { NavLink } from "react-router-dom";

import { ThemeModeToggle } from "./mode-toggle";
import { navLinks } from "@/constants/nav-links";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Logo />
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
