"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { JobListing } from "@/lib/definitions";
import { fetchJobListing } from "@/lib/data";

interface JobContextType {
  jobList: JobListing[];
  getJobById: (id: string) => JobListing | undefined;
  isLoading: boolean;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [jobList, setJobList] = useState<JobListing[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getJobList(): Promise<void> {
      try {
        setLoading(true);
        const data = await fetchJobListing();
        setJobList(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getJobList();
  }, []);

  function getJobById(id: string) {
    return jobList.find((job) => job.id === id);
  }

  return (
    <JobContext.Provider value={{ jobList, getJobById, isLoading }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext harus dipakai di dalam JobProvider");
  }
  return context;
}
