"use client";

import { useJobContext } from "@/context/useJobContext";
import { useEffect, useState } from "react";
import { JobListing } from "@/lib/definitions";
import { useRouter } from "next/navigation"
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
    <div className="max-w-[1024px] mx-auto py-8 flex flex-col p-2 lg:flex-row gap-4">
      {job ? (
        <>
          <div className="border-2 p-5 shadow rounded-xl flex-1 bg-white">
            <div className="flex gap-4 pb-10 border-b border-black/10">
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
                <Button
                  className="rounded-3xl h-8 text-xs"
                  onClick={handleApplyJob}
                >
                  Lamar Cepat
                </Button>
              </div>
              <div className="ml-auto text-sm">
                {job.createdAt && getTimeElapsed(job.createdAt)}
              </div>
            </div>
            <div className="py-5">
              <div>
                <h1 className="font-semibold ">Deskripsi Pekerjaan</h1>
                <ul className="list-disc list-outside pl-5 marker:text-[#00AAFF] my-4 text-sm">
                  {job.jobDesc.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="font-semibold">Kualifikasi</h1>
                <ul className="list-disc list-outside pl-5 marker:text-[#00AAFF] my-4 text-sm">
                  {job.jobReq.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-2 p-5 shadow rounded-xl bg-white h-fit">
            <h1 className="font-semibold">Benefit Perusahaan</h1>
            <div className="my-2 flex flex-wrap gap-2 max-w-80">
              <Chip>💸 Competitive Salary</Chip>
              <Chip>🎁 THR / Bonus system</Chip>
              <Chip>🍗 Free lunch</Chip>
              <Chip>👕 Casual Dress Code</Chip>
              <Chip>📈 Professional Development</Chip>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
