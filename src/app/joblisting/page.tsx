"use client";

import Filter from "@/components/filter";
import JobList from "@/components/job";
import Search from "@/components/search";
import { JobListSkeleton } from "@/components/ui/skeletons";
import { useJobContext } from "@/context/useJobContext";

import Link from "next/link";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Page() {
  const { jobList, isLoading } = useJobContext();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  // Filter berdasarkan query pencarian
  const filteredBySearch = jobList.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  // Filter berdasarkan kategori yang dipilih
  const filteredJob = filter
    ? filteredBySearch.filter((job) => job.category === filter)
    : filteredBySearch;

  return (
    <div className="px-4">
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-xl lg:text-2xl py-10 text-center font-medium">
          Dari Cari Kerja Sampai Dapat Kerja, Pasti{" "}
          <span className="text-[#00AAFF] font-semibold">#KitaBantu!</span>
        </h1>
        <div className="flex gap-4 relative ">
          <Search setQuery={setQuery} />
          <Filter setFilter={setFilter} />
          <HiMagnifyingGlass
            size={20}
            className="absolute top-1/2 -translate-y-1/2 left-3"
            color="#aaaaaa"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {!isLoading ? (
            filteredJob.length > 0 ? (
              filteredJob.map((job) => (
                <div key={job.id}> 
                  <JobList job={job} />
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-xl text-gray-500 ">
                Tidak ada yang cocok
              </p>
            )
          ) : (
            Array.from({ length: 9 }).map((_, index) => (
              <JobListSkeleton key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}