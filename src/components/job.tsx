import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Job as JobProps } from "@/lib/definitions";
import { getTimeElapsed } from "@/lib/utils";
import Image from "next/image";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineUser,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useJobContext } from "@/context/useJobContext"; // Sesuaikan dengan path yang benar

export default function Job({ job }: { job: JobProps }) {
  const { bookmarkedJobs, toggleBookmark } = useJobContext();
  const isBookmarked = bookmarkedJobs.includes(job.id);

  return (
    <Card>
      <CardHeader>
        <Image
          src={job.imageUrl}
          width={50}
          height={50}
          alt="company logo"
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">{job.jobTitle}</p>
          <p className="text-sm">{job.company}</p>
        </div>
        <button onClick={() => toggleBookmark(job.id)} className="ml-auto">
          {isBookmarked ? (
            <HiBookmark className="w-6 h-6 text-blue-500" />
          ) : (
            <HiOutlineBookmark className="w-6 h-6" />
          )}
        </button>
      </CardHeader>
      <CardBody>
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
        <div className="mt-4 text-sm">
          {job.createdAt && getTimeElapsed(job.createdAt)}
        </div>
      </CardBody>
      <Link href={`/joblisting/${job.id}`} passHref>
        <Button className="w-full justify-center text-white py-2 rounded-md mt-4">
          Detail
        </Button>
      </Link>
    </Card>
  );
}