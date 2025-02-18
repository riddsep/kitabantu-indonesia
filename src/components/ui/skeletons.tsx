import { Card, CardBody, CardHeader } from "./card";

export function JobListSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="w-[50px] h-[50px] rounded-full bg-gray-300 animate-pulse" />
        <div className="flex flex-col gap-2">
          <div className="w-32 h-4 bg-gray-300 rounded animate-pulse" />
          <div className="w-24 h-3 bg-gray-300 rounded animate-pulse" />
        </div>
      </CardHeader>
      <CardBody>
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine />
      </CardBody>
    </Card>
  );
}

function SkeletonLine() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />
      <div className="w-40 h-3 bg-gray-300 rounded animate-pulse" />
    </div>
  );
}
