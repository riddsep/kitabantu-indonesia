"use client";

import { useJobContext } from "@/context/useJobContext";
import { useEffect, useState } from "react";
import { JobListing } from "@/lib/definitions";
import Image from "next/image";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineUser,
} from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { getTimeElapsed } from "@/lib/utils";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { getJobById } = useJobContext();
  const [job, setJob] = useState<JobListing | null>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchedJob = getJobById(id);
      setJob(fetchedJob ?? null);
    }
  }, [id, getJobById]);

  return (
    <div className="max-w-[1024px] mx-auto py-10 flex gap-4">
      {job ? (
        <>
          <div className="border-2 p-5 shadow rounded-xl flex-1">
            <div className="flex gap-4">
              <Image
                src={job.imageUrl}
                alt="company logo"
                width={60}
                height={60}
                className="rounded-full border-sm p-2 shadow shrink-0 self-start"
              />
              <div>
                <h1 className="text-xl font-semibold">{job.jobTitle}</h1>
                <p className="text-[#00AAFF]">{job.company}</p>
                <div className="flex flex-col gap-1 my-4">
                  <div className="flex items-center gap-2">
                    <HiOutlineUser />
                    <span>{job.jobType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineMapPin />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineBriefcase />
                    <span>{job.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineBanknotes />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <Button className="rounded-3xl">Lamar Cepat</Button>
              </div>
              <div className="ml-auto text-sm">
                {job.createdAt && getTimeElapsed(job.createdAt)}
              </div>
            </div>
          </div>
          <div className="border-2 p-5 shadow rounded-xl">
            <h1>Benefit Perusahaan</h1>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
