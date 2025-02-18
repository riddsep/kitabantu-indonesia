"use client";

import Filter from "@/components/filter";
import JobList from "@/components/joblist";
import Search from "@/components/search";
import { JobListSkeleton } from "@/components/ui/skeletons";
import { useJobContext } from "@/context/useJobContext";

import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Page() {
  const { jobList, isLoading } = useJobContext();

  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-2xl py-10 text-center font-medium">
          Dari Cari Kerja Sampai Dapat Kerja, Pasti{" "}
          <span className="text-[#00AAFF] font-semibold">#KitaBantu!</span>
        </h1>
        <div className="flex gap-4 relative ">
          <Search />
          <Filter />
          <HiMagnifyingGlass
            size={20}
            className="absolute top-1/2 -translate-y-1/2 left-3"
            color="#aaaaaa"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 py-10">
          {!isLoading
            ? jobList.map((job) => (
                <Link href={`/joblisting/${job.id}`} key={job.id}>
                  <JobList job={job} />
                </Link>
              ))
            : Array.from({ length: 9 }).map((_, index) => (
                <JobListSkeleton key={index} />
              ))}
        </div>
      </div>
    </div>
  );
}
