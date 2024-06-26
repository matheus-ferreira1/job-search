import {
  CirclePlus,
  List,
  BarChart,
  UserRound,
  ShieldAlert,
} from "lucide-react";

export const dashboardLinks = [
  { text: "All Jobs", path: ".", Icon: List },
  { text: "Add Job", path: "add-job", Icon: CirclePlus },
  { text: "Stats", path: "stats", Icon: BarChart },
  { text: "Profile", path: "profile", Icon: UserRound },
  { text: "Admin", path: "admin", Icon: ShieldAlert },
];
