"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen overflow-hidden"
			data-scroll
			data-scroll-speed="-.3"
		>
			{/* Moving Earth Background */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="relative w-full h-full">
					{/* Earth Image with Animation */}
					<motion.div
						className="absolute inset-0 bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: "url('https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
						}}
						animate={{
							scale: [1, 1.1, 1],
							rotate: [0, 360],
						}}
						transition={{
							duration: 60,
							repeat: Infinity,
							ease: "linear"
						}}
					/>
					{/* Overlay for better text readability */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/70" />
				</div>
			</div>


			{/* Content */}
			<div className="relative z-20 w-full h-full flex flex-col justify-between">
				<div className="flex flex-col justify-center items-center text-center h-[75vh] px-6">
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
					>
						Empowering Connectivity with <br />
						<span className="text-blue-400">ICOM Telecom</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="mt-6 max-w-2xl text-lg text-gray-200"
					>
						Delivering innovative telecom solutions for businesses and individuals.
						From global connectivity to next-gen communication — we’ve got you
						covered.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
						className="mt-8 flex gap-4"
					>
						<Link
							href="/contact"
							className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
						>
							Start a Project <ArrowUpRight size={20} />
						</Link>
						<Link
							href="/services"
							className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition"
						>
							Explore Services
						</Link>
					</motion.div>
				</div>

				{/* Scroll Down */}
				<div className="relative w-full flex items-center justify-center pb-8">
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							repeat: Infinity,
							repeatType: "reverse",
							duration: 1.5,
						}}
						className="text-gray-200 text-sm"
					>
						↓ Scroll Down
					</motion.p>
				</div>
			</div>
		</section>
	);
}
