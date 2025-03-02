"use client";

import { useJobContext } from "@/context/useJobContext";
import { JobListSkeleton } from "@/components/ui/skeletons";
import Job from "@/components/job";

export default function SavedPage() {
  const { bookmarkedJobs, jobList, isLoading } = useJobContext();
  const savedJobs = jobList.filter((job) => bookmarkedJobs.includes(job.id));

  return (
    <div className={`px-4 ${savedJobs.length === 0 ? "my-32" : "my-24"}`}>
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-xl lg:text-2xl py-10 text-center font-medium">
          Pekerjaan Tersimpan
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {!isLoading ? (
            savedJobs.length > 0 ? (
              savedJobs.map((job) => (
                <div key={job.id}>
                  <Job job={job} />
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-xl text-gray-500">
                Tidak ada pekerjaan yang tersimpan.
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
