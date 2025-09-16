"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";
import { Shield, Zap, Globe, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    { icon: Shield, title: "Enterprise Security", desc: "Military-grade encryption and security protocols" },
    { icon: Zap, title: "Lightning Fast", desc: "Ultra-low latency 5G and fiber networks" },
    { icon: Globe, title: "Global Reach", desc: "Presence in 50+ countries worldwide" },
    { icon: Users, title: "Expert Team", desc: "Certified telecommunications engineers" },
    { icon: Award, title: "Industry Leader", desc: "Award-winning solutions and service" },
    { icon: TrendingUp, title: "Future Ready", desc: "Next-gen technology and innovation" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-primary padding-y relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.05)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto padding-x">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold text-telecomDark mb-6">
            Powering the Future of
            <span className="text-telecomBlue"> Communications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ICOM Telecom is a leading provider of telecommunications solutions, 
            connecting businesses globally with cutting-edge infrastructure and 
            innovative digital transformation services.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-telecomDark mb-4">
                Why Choose ICOM Telecom?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We create tailored telecommunications solutions that connect your teams, 
                clients, and partners across the globe. Our expertise spans from local 
                implementations to international enterprise deployments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The combination of <span className="font-semibold text-telecomBlue">advanced technology</span> and 
                <span className="font-semibold text-telecomBlue"> expert support</span> ensures your 
                communications are reliable, scalable, and future-ready.
              </p>
            </div>

            {/* Services List */}
            <div>
              <h4 className="text-xl font-semibold text-telecomDark mb-4">Core Services:</h4>
              <div className="space-y-2">
                {[
                  "5G Network Infrastructure",
                  "Enterprise VoIP Solutions", 
                  "Cloud Communications",
                  "Network Security & Monitoring"
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700 hover:text-telecomBlue transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-telecomBlue rounded-full"></div>
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>

            <RoundButton
              href="/icom-team"
              title="Learn More About Us"
              bgcolor="#0066cc"
              className="bg-white text-telecomBlue shadow-telecom hover:shadow-telecom-lg"
              style={{ color: "#fff" }}
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-telecom-lg">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDJFsCoPl97xPjEFXZRgyzpkel3NJIWx1gA&s"
                alt="Business Team Collaboration"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-telecomDark/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-telecom-lg border border-telecomLight"
            >
              <div className="text-3xl font-bold text-telecomBlue mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Network Uptime</div>
              <div className="text-xs text-gray-500 mt-1">Industry Leading</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                hoveredIndex === index 
                  ? 'border-telecomBlue shadow-telecom-lg transform -translate-y-2' 
                  : 'border-gray-200 shadow-telecom'
              }`}
            >
              <feature.icon className={`w-12 h-12 mb-4 transition-colors ${
                hoveredIndex === index ? 'text-telecomBlue' : 'text-gray-400'
              }`} />
              <h3 className="text-xl font-semibold text-telecomDark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}