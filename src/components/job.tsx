import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Job as JobProps } from "@/lib/definitions";
import { getTimeElapsed } from "@/lib/utils";
import Image from "next/image";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineUser,
} from "react-icons/hi2";

export default function Job({ job }: { job: JobProps }) {
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
    </Card>
  );
}
