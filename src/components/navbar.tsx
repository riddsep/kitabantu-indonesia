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
    <nav className="w-full flex justify-between items-center p-4 md:p-6 max-w-[1024px] mx-auto">
      <Logo />

      {/*  Desktop Nav*/}
      <ul className="hidden md:flex gap-2">
        {data.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={clsx(
              "block px-4 py-2 ",
              pathName === item.link && "text-[#00AAFF] "
            )}
          >
            {item.title}
          </Link>
        ))}
      </ul>

      {/* Mobile Nav */}
      <div className="relative md:hidden z-10">
        <button onClick={() => setIsActive(!isActive)}>
          <HiBars3 size={35} />
        </button>

        {isActive && (
          <ul className="absolute right-0 bg-white min-w-52 px-5 py-10 rounded-xl flex flex-col shadow-lg">
            {data.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className={clsx(
                  "block px-4 py-2",
                  pathName === item.link && "text-[#00AAFF] "
                )}
                onClick={() => setIsActive(false)} // Tutup menu setelah klik
              >
                {item.title}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
