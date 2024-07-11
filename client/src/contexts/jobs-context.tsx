import { FC, createContext, useState, useContext, ReactNode } from "react";
import { useLoaderData } from "react-router-dom";

type Job = {
  company: string;
  createdAt: Date;
  id: string;
  jobLocation: string;
  jobLocationType: string;
  jobStatus: string;
  jobType: string;
  position: string;
  updatedAt: Date;
  userId: string;
};

interface JobsContextType {
  jobs: Job[] | null;
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

const JobsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const jobs = useLoaderData() as { data: Job[] | null };

  return (
    <JobsContext.Provider value={{ jobs }}>{children}</JobsContext.Provider>
  );
};

const useJobs = (): JobsContextType => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobsProvider");
  }

  return context;
};

export { JobsProvider, useJobs };
