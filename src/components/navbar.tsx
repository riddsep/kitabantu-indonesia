"use client";

import Link from "next/link";
import { Logo } from "./ui/logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

const data = [
  { title: "Beranda", link: "/" },
  { title: "Loker", link: "/joblisting" },
  { title: "Tersimpan", link: "/tersimpan" },
  { title: "Terkirim", link: "/terkirim" },
];

export default function Navbar() {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-300">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <Logo />
        </div>
        <ul className="hidden md:flex gap-8">
          {data.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className={clsx(
                "relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all px-4 py-2 uppercase tracking-wide",
                pathName === item.link && "text-blue-600 font-semibold border-b-2 border-blue-600"
              )}
            >
              {item.title}
            </Link>
          ))}
        </ul>

        <div className="relative md:hidden">
          <button onClick={() => setIsActive(!isActive)}>
            <HiBars3 size={30} className="text-gray-700 hover:text-blue-600 transition-all" />
          </button>

          {isActive && (
            <ul className="absolute right-0 top-12 bg-white shadow-xl rounded-lg py-4 px-6 flex flex-col gap-4 w-60 border border-gray-200 animate-fade-in">
              {data.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className={clsx(
                    "text-base text-gray-700 hover:text-blue-600 transition-all px-3 py-2 uppercase",
                    pathName === item.link && "text-blue-600 font-semibold border-l-4 border-blue-600"
                  )}
                  onClick={() => setIsActive(false)}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
