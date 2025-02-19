"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { JobListing } from "@/lib/definitions";
import { fetchJobListing } from "@/lib/data";

interface JobContextType {
  jobList: JobListing[];
  getJobById: (id: string) => JobListing | undefined;
  isLoading: boolean;
  bookmarkedJobs: string[];
  toggleBookmark: (id: string) => void;
  appliedJobs: string[];
  applyForJob: (id: string) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [jobList, setJobList] = useState<JobListing[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  useEffect(() => {
    async function getJobList(): Promise<void> {
      try {
        setLoading(true);
        const data = await fetchJobListing();
        setJobList(data);
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

  function toggleBookmark(id: string) {
    setBookmarkedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  }


  function applyForJob(id: string) {
    setAppliedJobs((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  return (
    <JobContext.Provider
      value={{
        jobList,
        getJobById,
        isLoading,
        bookmarkedJobs,
        toggleBookmark,
        appliedJobs,
        applyForJob,
      }}
    >
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
