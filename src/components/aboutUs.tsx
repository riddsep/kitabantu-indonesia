import React from 'react';

export default function AboutUs() {
  return (
    <div>
    <section className="py-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl shadow-xl">
      <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Title & Description */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Menghubungkan Talenta dengan Peluang Terbaik
          </h2>
          <p className="mt-6 text-lg text-black  leading-relaxed">
            BANTU hadir untuk membantu Anda menemukan pekerjaan dan magang yang sesuai dengan keahlian dan minat Anda. Kami percaya bahwa setiap individu memiliki potensi untuk berkembang dengan kesempatan yang tepat.
          </p>
          <button className="mt-6 flex items-center gap-2 text-white border-b-2 border-white pb-1 transition hover:text-gray-200 hover:border-gray-200">
            Pelajari Lebih Lanjut →
          </button>
        </div>

        {/* Right Section - Stats */}
        <div className="lg:w-1/3 mt-12 lg:mt-0 flex flex-col space-y-8 text-white text-center">
          <div>
            <p className="text-5xl font-extrabold">10,000+</p>
            <p className="text-lg text-black ">Kesempatan Karier</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">5,000+</p>
            <p className="text-lg text-black ">Talenta Terhubung</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">500+</p>
            <p className="text-lg text-black ">Perusahaan Bermitra</p>
          </div>
        </div>
      </div>
    </section>
    <div className="flex flex-col md:flex-row gap-4  justify-center items-center mt-10">
        {["Transparent Procedures", "Help At Every Step", "Value For Money"].map((text, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-400 to-blue-600 text-white  text-center px-6 p-8 rounded-2xl w-full"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}