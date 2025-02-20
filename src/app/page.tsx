import AboutUs from "@/components/aboutUs";
import Testimonials from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
} from "react-icons/hi2";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-[calc(100vh-73.4px)] text-center flex flex-col justify-center items-center mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-[900px] leading-tight">
            Kerja Sesuai Keahlian,{" "}
            <span className="text-[#00AAFF]">Bayaran Sesuai Harapan!</span>
          </h1>
          <p className="w-full max-w-[700px] mx-auto text-lg lg:text-xl text-gray-700 mb-8">
            Gabung dengan ribuan tenaga kerja informal & freelancer yang
            menemukan peluang kerja dengan mudah.
          </p>
          <Link href="/joblisting">
            <Button className="px-6 py-3 text-lg font-medium bg-[#00AAFF] hover:bg-[#00AAFF]/60 text-white rounded-lg shadow-lg transition-all duration-300">
              Cari Sekarang, Gratis!
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                {feature.icon}
              </div>
              <p className="text-lg font-medium text-gray-800">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <AboutUs />
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

const features = [
  {
    icon: <HiOutlineUsers className="w-8 h-8 text-blue-600" />,
    text: "Ribuan Freelancer",
  },
  {
    icon: <HiOutlineBriefcase className="w-8 h-8 text-blue-600" />,
    text: "Pekerjaan Berkualitas",
  },
  {
    icon: <HiOutlineCurrencyDollar className="w-8 h-8 text-blue-600" />,
    text: "Bayaran Kompetitif",
  },
];
