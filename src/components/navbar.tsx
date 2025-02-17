"use client";

import Link from "next/link";
import { Logo } from "./ui/logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const data = [
  {
    title: "Beranda",
    link: "/",
  },
  {
    title: "Loker",
    link: "/joblisting",
  },
  {
    title: "Perusahaan",
    link: "/perusahaan",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="w-full flex justify-between items-center py-4 max-w-[1024px] mx-auto">
      <Logo />
      <ul className="flex gap-5 items-center">
        {data.map((item) => (
          <Link
            key={item.title}
            role="button"
            href={item.link}
            className={clsx(pathName === item.link && "text-[#00AAFF]")}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
