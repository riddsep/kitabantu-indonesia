import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
} from "react-icons/hi2";
export default function Home() {
  return (
    <div className="">
      <div className="max-w-[1024px] mx-auto ">
        <div className="h-[calc(100vh-64px)] text-center flex flex-col justify-center">
          <h1 className="text-6xl font-semibold mb-6 max-w-[900px] mx-auto">
            Kerja Sesuai Keahlian, Bayaran Sesuai Harapan!
          </h1>
          <p className="w-full max-w-[700px] mx-auto text-xl mb-8">
            Gabung dengan ribuan tenaga kerja informal & freelancer yang
            menemukan peluang kerja dengan mudah
          </p>
          <Link href="/joblisting">
            <Button className="w-fit mx-auto">Cari Sekarang, Gratis!</Button>
          </Link>
          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <HiOutlineUsers className="w-8 h-8 text-[#00AAFF]" />
              </div>
              <p className="text-sm text-gray-600">Ribuan Freelancer</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <HiOutlineBriefcase className="w-8 h-8 text-[#00AAFF]" />
              </div>
              <p className="text-sm text-gray-600">Pekerjaan Berkualitas</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <HiOutlineCurrencyDollar className="w-8 h-8 text-[#00AAFF]" />
              </div>
              <p className="text-sm text-gray-600">Bayaran Kompetitif</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
