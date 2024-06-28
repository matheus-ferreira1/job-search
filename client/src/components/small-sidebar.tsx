import { NavLink } from "react-router-dom";

import { AlignJustify } from "lucide-react";

import { dashboardLinks } from "@/constants/dashboard-links";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";

export const SmallSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="size-6 md:hidden" />
        <span className="sr-only">Toggle sidebar</span>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mb-6">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="space-y-3">
          {dashboardLinks.map((link) => (
            <SheetClose className="flex" key={link.path} asChild>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  [
                    "flex items-center gap-2 rounded-md px-3 py-2 font-medium border",
                    isActive ? "bg-muted" : "",
                  ].join(" ")
                }
              >
                <link.Icon />
                <span>{link.text}</span>
              </NavLink>
            </SheetClose>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
