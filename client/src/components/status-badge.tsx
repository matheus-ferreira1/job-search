import { FC } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  return (
    <Badge
      className={cn("px-3 py-1 font-medium", {
        "bg-yellow-400/80 text-black": status === "PENDING",
        "bg-blue-400/80 text-white": status === "INTERVIEW",
        "bg-green-400/80 text-white": status === "APPROVED",
        "bg-red-400/80 text-white": status === "DECLINED",
      })}
    >
      {status}
    </Badge>
  );
};
