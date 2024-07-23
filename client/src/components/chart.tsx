import { MonthlyApplicationsTypes } from "@/pages/stats";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartPropsTypes = {
  data: MonthlyApplicationsTypes[];
};

export const Chart: React.FC<ChartPropsTypes> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#eab308" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};
