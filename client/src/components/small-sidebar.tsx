import { Link } from "react-router-dom";
import { Icons } from "./icons";
import {
  Sheet,
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
        <Icons.menu className="h-6 w-6 md:hidden" />
        <span className="sr-only">Toggle sidebar</span>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="space-y-3 divide-y">
            <Link
              to="/"
              className="text-lg flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted mt-6"
            >
              <Icons.listicon className="h-5 w-5" />
              <span>All submissions</span>
            </Link>
            <Link
              to="#"
              className="text-lg flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted"
            >
              <Icons.add className="h-5 w-5" />
              <span>Add job</span>
            </Link>
            <Link
              to="#"
              className="text-lg flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted"
            >
              <Icons.barchart className="h-5 w-5" />
              <span>Stats</span>
            </Link>
            <Link
              to="#"
              className="text-lg flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted"
            >
              <Icons.userprofile className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
