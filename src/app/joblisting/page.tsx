import Filter from "@/components/filter";
import Search from "@/components/search";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  HiMagnifyingGlass,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineUser,
} from "react-icons/hi2";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] h-screen">
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-2xl py-10 text-center font-medium">
          Dari Cari Kerja Sampai Dapat Kerja, Pasti{" "}
          <span className="text-[#00AAFF] font-semibold">#KitaBantu!</span>
        </h1>
        <div className="flex gap-4 relative mb-10">
          <Search />
          <Filter />
          <HiMagnifyingGlass
            size={20}
            className="absolute top-1/2 -translate-y-1/2 left-3"
            color="#aaaaaa"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Link href={"/joblisting"}>
            <Card>
              <CardHeader>
                <Image
                  src="/logo.jpg"
                  width={50}
                  height={50}
                  alt="company logo"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Frontend Developer</p>
                  <p className="text-sm">PT. Kita Bantu Indonesia</p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex items-center gap-2">
                  <HiOutlineUser />
                  <span>Penuh Waktu</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin />
                  <span>On-site &#x2022; Jakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineBriefcase />
                  <span>Development & IT</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineBanknotes />
                  <span>Negotiable</span>
                </div>
              </CardBody>
            </Card>
          </Link>
          <Link href={"/joblisting"}>
            <Card>
              <CardHeader>
                <Image
                  src="/logo.jpg"
                  width={50}
                  height={50}
                  alt="company logo"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Frontend Developer</p>
                  <p className="text-sm">PT. Kita Bantu Indonesia</p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex items-center gap-2">
                  <HiOutlineUser />
                  <span>Penuh Waktu</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin />
                  <span>On-site &#x2022; Jakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineBriefcase />
                  <span>Development & IT</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineBanknotes />
                  <span>Negotiable</span>
                </div>
              </CardBody>
            </Card>
          </Link>
          <Link href={"/joblisting"}>
            <Card>
              <CardHeader>
                <Image
                  src="/logo.jpg"
                  width={50}
                  height={50}
                  alt="company logo"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Frontend Developer</p>
                  <p className="text-sm">PT. Kita Bantu Indonesia</p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex items-center gap-2">
                  <HiOutlineUser />
                  <span>Penuh Waktu</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin />
                  <span>On-site &#x2022; Jakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineBriefcase />
                  <span>Development & IT</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineBanknotes />
                  <span>Negotiable</span>
                </div>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
