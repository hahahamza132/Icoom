"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PartnersSwiper() {
  // Array of logos inside /public/partners
  const partnerLogos = [
    "/Logos/sfr.png",
    "/Logos/unyc.png",
    "/Logos/Alliancedesbuissness.png",
    "/Logos/logo-les-tricolores.png",
    "/Logos/axydislogo.png",
    "/partners/logo6.png",
  ];

  return (
    <div className="w-full relative rounded-t-[20px] overflow-hidden py-12 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-700">
      {/* Title */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Our Trusted Partners
        </h2>
        <p className="text-indigo-200 max-w-2xl mx-auto">
          Collaborating with industry leaders worldwide
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        grabCursor={true}
        breakpoints={{
          1280: { slidesPerView: 5 },
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}
        className="w-full h-[120px] relative z-10"
      >
        {partnerLogos.map((logo, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <div className="relative w-[160px] h-[80px] flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 group hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <Image
                src={logo}
                alt={`Partner ${i + 1}`}
                width={120}
                height={40}
                className="max-h-[40px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent w-3/4 rounded-full"></div>
      </div>
    </div>
  );
}
