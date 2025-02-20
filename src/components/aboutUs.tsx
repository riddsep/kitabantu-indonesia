"use client"; // Pastikan ini adalah Client Component

import React from "react";
import CountUp from "react-countup";

export default function AboutUs() {
  return (
    <div>
      <section className="py-10 sm:py-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Title & Description */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight drop-shadow-xl">
              Menghubungkan Talenta dengan Peluang Terbaik
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#EAEAEA] leading-relaxed">
              BANTU hadir untuk membantu Anda menemukan pekerjaan dan magang yang sesuai dengan keahlian dan minat Anda. Kami percaya bahwa setiap individu memiliki potensi untuk berkembang dengan kesempatan yang tepat.
            </p>
            <button className="mt-4 sm:mt-6 flex items-center gap-2 text-white font-bold border-b-2 border-white pb-1 transition hover:text-gray-200 hover:border-gray-200">
              Pelajari Lebih Lanjut →
            </button>
          </div>

          {/* Right Section - Stats */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex flex-col space-y-8 sm:space-y-12 text-white text-center">
            <div>
              <p className="text-4xl sm:text-5xl text-[#FFD700] font-extrabold">
                <CountUp start={0} end={10000} duration={3} separator="," />+
              </p>
              <p className="text-gray-300 text-base sm:text-lg drop-shadow-sm">Kesempatan Karier</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl text-[#00FFC6] font-extrabold">
                <CountUp start={0} end={5000} duration={3} separator="," />+
              </p>
              <p className="text-gray-300 text-base sm:text-lg drop-shadow-sm">Talenta Terhubung</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold">
                <CountUp start={0} end={500} duration={3} separator="," />+
              </p>
              <p className="text-gray-300 text-base sm:text-lg drop-shadow-sm">Perusahaan Bermitra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
        {["Peluang Karier Terbaik", "Dukungan di Setiap Langkah", "Jembatan Menuju Masa Depan"].map((text, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-400 to-blue-600 text-white text-lg sm:text-xl font-semibold text-center px-4 sm:px-6 py-6 sm:py-8 rounded-2xl w-full"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}