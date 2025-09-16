import { motion } from "framer-motion";
import { Signal, Wifi, Globe, Shield, Zap, Network } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen bg-primary relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,102,204,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,204,255,0.1)_0%,transparent_50%)]"></div>
			<div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,204,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,204,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			
			{/* Floating Elements */}
			{[...Array(15)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-telecomBlue/40 rounded-full"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
					animate={{
						scale: [1, 2, 1],
						opacity: [0.2, 0.8, 0.2],
					}}
					transition={{
						duration: 4 + Math.random() * 2,
						repeat: Infinity,
						delay: Math.random() * 3,
					}}
				/>
			))}
			
			<div className="w-full flex flex-col justify-center relative z-10 min-h-screen">
				<div className="max-w-7xl mx-auto padding-x">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-2 bg-telecomLight border border-telecomBlue/20 rounded-full px-6 py-3 mb-8">
							<Network className="w-5 h-5 text-telecomBlue" />
							<span className="text-telecomDark font-semibold">Enterprise Telecommunications</span>
						</div>
						
						<h1 className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xm:text-3xl font-bold text-telecomDark mb-6 leading-tight">
							Next-Generation
							<br />
							<span className="text-telecomBlue">Telecom Solutions</span>
						</h1>
						
						<p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
							We deliver cutting-edge telecommunications infrastructure, 5G networks, 
							cloud communications, and digital transformation solutions that connect 
							businesses globally and drive innovation across industries.
						</p>
					</motion.div>

					{/* Services Grid */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
					>
						{[
							{
								icon: Signal,
								title: "5G Infrastructure",
								desc: "Ultra-fast, low-latency networks for the future of connectivity",
								color: "from-blue-500 to-blue-600"
							},
							{
								icon: Shield,
								title: "Network Security",
								desc: "Enterprise-grade security protocols and threat protection",
								color: "from-green-500 to-green-600"
							},
							{
								icon: Globe,
								title: "Global Connectivity",
								desc: "Seamless international communications across 50+ countries",
								color: "from-purple-500 to-purple-600"
							},
							{
								icon: Wifi,
								title: "Cloud Communications",
								desc: "Scalable VoIP, video conferencing, and unified communications",
								color: "from-cyan-500 to-cyan-600"
							},
							{
								icon: Zap,
								title: "Digital Transformation",
								desc: "Modernize your communications with AI-driven solutions",
								color: "from-orange-500 to-orange-600"
							},
							{
								icon: Network,
								title: "Managed Services",
								desc: "24/7 monitoring, maintenance, and technical support",
								color: "from-red-500 to-red-600"
							}
						].map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 * index }}
								className="group bg-white rounded-3xl p-8 shadow-telecom hover:shadow-telecom-lg border border-gray-100 hover:border-telecomBlue/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
							>
								<div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<service.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-telecomDark mb-4 group-hover:text-telecomBlue transition-colors">
									{service.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{service.desc}
								</p>
							</motion.div>
						))}
					</motion.div>

					{/* Stats Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="bg-white rounded-3xl p-12 shadow-telecom-lg border border-gray-100"
					>
						<div className="text-center mb-12">
							<h2 className="text-4xl font-bold text-telecomDark mb-4">
								Trusted by Industry Leaders
							</h2>
							<p className="text-xl text-gray-600">
								Our solutions power communications for enterprises worldwide
							</p>
						</div>
						
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{[
								{ value: "500+", label: "Enterprise Clients", icon: Globe },
								{ value: "99.9%", label: "Network Uptime", icon: Shield },
								{ value: "50+", label: "Countries Served", icon: Network },
								{ value: "24/7", label: "Expert Support", icon: Zap }
							].map((stat, index) => (
								<div key={index} className="text-center group">
									<stat.icon className="w-12 h-12 text-telecomBlue mx-auto mb-4 group-hover:scale-110 transition-transform" />
									<div className="text-4xl font-bold text-telecomDark mb-2">{stat.value}</div>
									<div className="text-gray-600 font-medium">{stat.label}</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}