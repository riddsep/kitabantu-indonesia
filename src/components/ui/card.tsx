export function Card({ children }: { children: React.ReactNode }) {
  return <div className=" rounded-md bg-white p-5 shadow-md ">{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4 mb-4">{children}</div>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2  text-sm">{children}</div>;
}
