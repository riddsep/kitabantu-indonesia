"use client";

import { useJobContext } from "@/context/useJobContext";
import { useEffect, useState } from "react";
import { JobListing } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineUser,
} from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { getTimeElapsed } from "@/lib/utils";
import Chip from "@/components/ui/chip";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { getJobById, applyForJob } = useJobContext();
  const [job, setJob] = useState<JobListing | null>(null);
  const [id, setId] = useState<string | null>(null);

  const router = useRouter();


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

  const handleApplyJob = () => {
    if (id) {
      applyForJob(id);
      router.push("/terkirim");
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto py-12 flex flex-col lg:flex-row gap-6 px-4 lg:px-0 break-words text-wrap">
      {job ? (
        <>
          <div className="border-2 p-6 shadow rounded-xl flex-1 bg-white">
            <div className="flex gap-4 pb-6 border-b border-black/10 items-start">
              <Image
                src={job.imageUrl}
                alt="company logo"
                width={70}
                height={70}
                className="rounded-full border p-2 shadow shrink-0"
              />

              <div className="flex-1">
                <h1 className="text-xl font-semibold">{job.jobTitle}</h1>
                <p className="text-[#00AAFF]">{job.company}</p>
                <div className="flex flex-col gap-1 my-4">
                  <div className="flex items-center gap-2">

                    <HiOutlineUser />
                    <span className="break-words">{job.jobType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <HiOutlineMapPin />
                    <span className="break-words">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <HiOutlineBriefcase />
                    <span className="break-words">{job.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <HiOutlineBanknotes />
                    <span className="break-words">{job.salary}</span>
                  </div>
                </div>

                <Button
                  className="rounded-3xl h-8 text-xs"
                  onClick={handleApplyJob}
                >
                  Lamar Cepat
                </Button>
                <div className="mt-5 text-end text-sm md:hidden">
                  {job.createdAt && getTimeElapsed(job.createdAt)}
                </div>
              </div>
              <div className="ml-auto text-sm hidden md:block">
                {job.createdAt && getTimeElapsed(job.createdAt)}
              </div>
              <div className="ml-auto text-sm text-gray-500 mt-2">{job.createdAt && getTimeElapsed(job.createdAt)}</div>
            </div>
            <div className="py-6">
              <div>
                <h1 className="font-semibold text-lg">Deskripsi Pekerjaan</h1>
                <ul className="list-disc list-outside pl-5 marker:text-[#00AAFF] my-4 text-base text-gray-700">
                  {job.jobDesc.map((desc) => (
                    <li key={desc} className="break-words">{desc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="font-semibold text-lg">Kualifikasi</h1>
                <ul className="list-disc list-outside pl-5 marker:text-[#00AAFF] my-4 text-base text-gray-700">
                  {job.jobReq.map((desc) => (
                    <li key={desc} className="break-words">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-2 p-6 shadow rounded-xl bg-white h-fit w-full lg:max-w-[300px]">
            <h1 className="font-semibold text-lg mb-4">Benefit Perusahaan</h1>
            <div className="flex flex-wrap gap-2">
              <Chip>💸 Competitive Salary</Chip>
              <Chip>🎁 THR / Bonus system</Chip>
              <Chip>🍗 Free lunch</Chip>
              <Chip>👕 Casual Dress Code</Chip>
              <Chip>📈 Professional Development</Chip>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </div>
  );
}
