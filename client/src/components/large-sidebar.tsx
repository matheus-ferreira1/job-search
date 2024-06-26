import { Link } from "react-router-dom";

import { Icons } from "./icons";

export const LargeSidebar = () => {
  return (
    <div className="hidden w-60 flex-col gap-4 border-r bg-background p-4 md:flex">
      <Link
        to="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted"
      >
        <Icons.listicon className="h-5 w-5" />
        <span>All submissions</span>
      </Link>
      <Link
        to="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted"
      >
        <Icons.add className="h-5 w-5" />
        <span>Add job</span>
      </Link>
      <Link
        to="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted"
      >
        <Icons.barchart className="h-5 w-5" />
        <span>Stats</span>
      </Link>
      <Link
        to="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors hover:bg-muted"
      >
        <Icons.userprofile className="h-5 w-5" />
        <span>Profile</span>
      </Link>
    </div>
  );
};
