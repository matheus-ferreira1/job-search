import { useJobs } from "@/contexts/jobs-context";
import { JobCard } from "./job-card";

export const JobsList: React.FC = () => {
  const { jobs } = useJobs();

  if (jobs?.length === 0)
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl font-bold text-muted-foreground">No jobs yet</p>
      </div>
    );

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {jobs?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
