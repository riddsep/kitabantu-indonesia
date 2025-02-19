"use client";

import { useJobContext } from "@/context/useJobContext";
import { JobListSkeleton } from "@/components/ui/skeletons";
import Job from "@/components/job";

export default function AppliedPage() {
  const { appliedJobs, jobList, isLoading } = useJobContext();
  const submittedJobs = jobList.filter((job) => appliedJobs.includes(job.id));

  return (
    <div className="px-4">
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-xl lg:text-2xl py-10 text-center font-medium">
          Pekerjaan Terkirim
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {!isLoading ? (
            submittedJobs.length > 0 ? (
              submittedJobs.map((job) => (
                <div key={job.id}>
                  <Job job={job} />
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-xl text-gray-500">
                Tidak ada pekerjaan yang telah dilamar.
              </p>
            )
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <JobListSkeleton key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
