"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Signal, Wifi, Globe, Zap } from "lucide-react";

export default function Hero() {
	return (
		<section className="relative w-full min-h-screen bg-primary overflow-hidden">
			{/* Animated Earth Background */}
			<div className="absolute inset-0 flex items-center justify-center opacity-20">
				<div className="relative w-[800px] h-[800px] lg:w-[600px] lg:h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px]">
					<img
						src="https://gifdb.com/images/high/earth-spinning-to-left-n19e2i274qbb8afu.gif"
						alt="Spinning Earth"
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
			
			{/* Animated Background Grid */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,204,0.0001)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,204,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
			
			{/* Floating Network Nodes */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(12)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 bg-telecomBlue/30 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.3, 0.8, 0.3],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			{/* Main Content */}
			<div className="relative z-10 w-full h-full flex flex-col justify-center padding-x">
				<div className="max-w-7xl mx-auto">
					{/* Hero Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 bg-telecomLight border border-telecomBlue/20 rounded-full px-6 py-3 mb-8"
					>
						<Signal className="w-4 h-4 text-telecomBlue" />
						<span className="text-telecomDark font-medium text-sm">Next-Gen Telecommunications</span>
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xm:text-3xl font-bold text-telecomDark leading-tight mb-6"
					>
						Connecting Your
						<br />
						<span className="text-telecomBlue relative">
							Digital Future
							<motion.div
								className="absolute -bottom-2 left-0 w-full h-1 bg-telecomAccent rounded-full"
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ duration: 1, delay: 1 }}
							/>
						</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed"
					>
						ICOM Telecom delivers cutting-edge telecommunications infrastructure, 
						5G networks, and digital transformation solutions for enterprises worldwide.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex flex-wrap gap-4 mb-16"
					>
						<Link
							href="/contact"
							className="group bg-telecomBlue hover:bg-telecomDark text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-telecom hover:shadow-telecom-lg transform hover:-translate-y-1"
						>
							Start Your Project
							<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
						</Link>
						<Link
							href="/services"
							className="border-2 border-telecomBlue text-telecomBlue hover:bg-telecomBlue hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
						>
							Explore Solutions
						</Link>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="grid grid-cols-4 sm:grid-cols-2 gap-8 max-w-2xl"
					>
						{[
							{ icon: Globe, value: "50+", label: "Countries" },
							{ icon: Signal, value: "99.9%", label: "Uptime" },
							{ icon: Zap, value: "500+", label: "Enterprises" },
							{ icon: Wifi, value: "24/7", label: "Support" },
						].map((stat, index) => (
							<div key={index} className="text-center">
								<stat.icon className="w-8 h-8 text-telecomBlue mx-auto mb-2" />
								<div className="text-2xl font-bold text-telecomDark">{stat.value}</div>
								<div className="text-sm text-gray-600">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="w-6 h-10 border-2 border-telecomBlue rounded-full flex justify-center"
				>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="w-1 h-3 bg-telecomBlue rounded-full mt-2"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}