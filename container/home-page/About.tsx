"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Example images (replace with your own imports or URLs)
  const images = [
    aboutImg,
    "/about.png",
    "/about.png",
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-white to-gray-50 padding-y rounded-t-[20px] z-20 relative mt-[-15px] overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10% left-5% w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10% right-5% w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200/40"
            style={{
              width: Math.random() * 15 + 5 + 'px',
              height: Math.random() * 15 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `floatParticle ${Math.random() * 15 + 10}s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Intro with 3D text effect */}
      <div className="pl-[50px] sm:px-[20px] xm:px-[20px] relative">
        <div className="relative inline-block">
          <h2 className="sub-heading font-medium font-NeueMontreal text-gray-900 leading-relaxed max-w-4xl relative z-10">
            ICOM TELECOM is a{" "}
            <span className="text-blue-600 font-semibold relative inline-block transform transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">
              strategic partner
              <span className="absolute -inset-1 bg-blue-100/40 rounded-lg -z-10 blur-sm"></span>
            </span>{" "}
            for fast-growing tech businesses that need to&nbsp;
            <span className="link-flash cursor-pointer text-blue-600 relative inline-block">
              raise funds
              <span className="absolute inset-0 bg-blue-100/30 rounded-md -z-10 transform scale-110 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </span>
            , sell products,{" "}
            <span className="link-flash cursor-pointer text-blue-600 relative inline-block">
              explain complex ideas
              <span className="absolute inset-0 bg-blue-100/30 rounded-md -z-10 transform scale-110 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </span>
            , and{" "}
            <span className="link-flash cursor-pointer text-blue-600 relative inline-block">
              hire great people
              <span className="absolute inset-0 bg-blue-100/30 rounded-md -z-10 transform scale-110 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </span>
            .
          </h2>
          {/* Subtle 3D shadow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/20 to-transparent -z-20 blur-lg rounded-lg"></div>
        </div>
      </div>

      {/* Divider Section with 3D border effect */}
      <div className="w-full border-y border-gray-200 my-[60px] py-[30px] relative">
        {/* 3D Border Highlights */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
        
        <div className="padding-x w-full flex sm:flex-col xm:flex-col gap-[40px] justify-between">
          {/* Left side */}
          <div className="w-[40%] sm:w-full xm:w-full">
            <h3 className="text-lg font-semibold text-gray-800 relative inline-block">
              What you can expect?
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-400/50 rounded-full"></span>
            </h3>
          </div>

          {/* Right side */}
          <div className="w-[60%] sm:w-full xm:w-full">
            <div className="flex gap-[40px] h-full items-start sm:flex-col xm:flex-col">
              <div className="w-[50%] sm:w-full xm:w-full space-y-6">
                <p className="text-gray-600 leading-relaxed transition-transform duration-300 hover:translate-x-1">
                  We create tailored presentations to help you persuade your
                  colleagues, clients, or investors — whether it's live or
                  digital, delivered for one or a hundred people.
                </p>
                <p className="text-gray-600 leading-relaxed transition-transform duration-300 hover:translate-x-1">
                  We believe the mix of{" "}
                  <span className="font-medium text-gray-900 relative">
                    strategy and design
                    <span className="absolute -inset-x-1 -inset-y-0.5 bg-yellow-100/40 rounded-lg -z-10 transform scale-105"></span>
                  </span>{" "}
                  (with a bit of coffee) is what makes your message clear,
                  convincing, and captivating.
                </p>
              </div>

              {/* Links */}
              <div className="w-[50%] sm:w-full xm:w-full">
                <h1 className="text-gray-800 font-semibold mb-4 relative inline-block">
                  Services:
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400/30 rounded-full"></span>
                </h1>
                <div className="flex flex-col gap-2">
                  {footerItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <LinkHover
                        className="text-gray-700 hover:text-blue-600 transition-colors pl-2 relative z-10"
                        title={item.title}
                        href="/"
                      />
                      <div className="absolute inset-0 bg-blue-50/30 -z-10 rounded-lg transform origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Approach + Images */}
      <div className="w-full flex flex-col lg:flex-row justify-between padding-x gap-[40px]">
        {/* Text + Button */}
        <div className="flex flex-col gap-[30px] max-w-md">
          <Heading title="Our approach" />
          <div className="w-fit relative">
            <div className="absolute -inset-2 bg-blue-200/40 rounded-full blur-lg opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
            <RoundButton
              href="/ochi-team"
              title="Read More"
              bgcolor="#2563eb"
              className="bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg relative z-10"
              style={{ color: "#fff" }}
            />
          </div>
        </div>

        {/* Images grid with enhanced 3D effects */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 perspective-1000">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative rounded-[15px] overflow-hidden transition-all duration-700 ease-[.215,.61,.355,1] cursor-pointer transform-style-3d ${
                hoveredIndex === index 
                  ? "scale-[0.97] rotate-x-5 rotate-y-5 shadow-xl" 
                  : "shadow-md"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ 
                transform: hoveredIndex === index 
                  ? 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(0.97) translateZ(20px)' 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)'
              }}
            >
              <div className="relative w-full h-[250px] overflow-hidden">
                <Image
                  src={img}
                  alt={`about-img-${index}`}
                  fill
                  className={`object-cover transition-all duration-[1.2s] ease-[.215,.61,.355,1] ${
                    hoveredIndex === index ? "scale-[1.1] rotate-1" : ""
                  }`}
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* 3D frame effect */}
              <div className="absolute inset-0 rounded-[15px] border border-white/20 pointer-events-none"></div>
              <div className="absolute -inset-1 rounded-[15px] border border-white/10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}