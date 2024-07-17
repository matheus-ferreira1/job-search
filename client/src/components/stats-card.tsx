import { FC, ReactElement } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type StatsCardProps = {
  label: string;
  value: number;
  icon: ReactElement;
};

export const StatsCard: FC<StatsCardProps> = ({ label, value, icon }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};
