import { Link } from "react-router-dom";
import { Icons } from "./icons";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <Icons.briefcase className="h-6 w-6" />
      <span className="ml-2 font-bold tracking-wide ">Job Tracker</span>
    </Link>
  );
};
