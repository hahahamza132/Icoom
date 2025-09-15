import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
			{/* 3D Background Elements */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/20 via-blue-200/10 to-transparent"></div>
			<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-300/30 to-transparent"></div>
			
			{/* Floating 3D Shapes */}
			<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"></div>
			
			{/* 3D Grid Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
			
			<div className="w-full flex flex-col justify-between relative z-10">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x pt-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							<h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase drop-shadow-lg">
								TELECOM SERVICES
							</h1>
						</motion.div>
					</div>
					
					{/* Animated Border Divider */}
					<motion.div 
						className="w-full border-t border-blue-300/40 relative"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 1.2, delay: 0.3 }}
					>
						<div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
						<div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
					</motion.div>
					
					<motion.div 
						className="w-full"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-blue-100 padding-y leading-relaxed">
							We deliver&nbsp;
							<span className="relative group cursor-pointer">
								<span className="text-white font-medium relative z-10">cutting-edge</span>
								<span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-lg transform group-hover:scale-105 transition-transform duration-300 -z-10"></span>
							</span>
							&nbsp;telecommunications solutions that connect businesses globally, enhance network infrastructure, and&nbsp;
							<span className="relative group cursor-pointer">
								<span className="text-white font-medium relative z-10">drive digital transformation</span>
								<span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-lg transform group-hover:scale-105 transition-transform duration-300 -z-10"></span>
							</span>
							&nbsp;across industries.
						</p>
					</motion.div>
					
					{/* Animated Border Divider */}
					<motion.div 
						className="w-full border-t border-blue-300/40 relative"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 1.2, delay: 0.7 }}
					>
						<div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
						<div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
					</motion.div>
					
					<div className="w-full flex py-[20px] flex-col">
						<motion.div 
							className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.9 }}
						>
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-blue-200">
									Our comprehensive approach <br /> to telecommunications:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<motion.div 
										className="flex flex-col gap-[20px] p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
										whileHover={{ y: -5, transition: { duration: 0.2 } }}
									>
										<p className="paragraph font-NeueMontreal text-white underline decoration-cyan-400 decoration-2">
											Network Infrastructure
										</p>
										<p className="paragraph font-NeueMontreal text-blue-100 leading-relaxed">
											What connectivity do you need?
											<br className="sm:hidden xm:hidden" /> Understanding your
											network requirements <br className="sm:hidden xm:hidden" />
											allows us to design scalable solutions
											<br className="sm:hidden xm:hidden" /> that grow with your
											business and ensure <br className="sm:hidden xm:hidden" />
											reliable performance.
										</p>
									</motion.div>
									
									<motion.div 
										className="flex flex-col gap-[20px] p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
										whileHover={{ y: -5, transition: { duration: 0.2 } }}
										transition={{ delay: 0.1 }}
									>
										<p className="paragraph font-NeueMontreal text-white underline decoration-blue-400 decoration-2">
											Global Connectivity
										</p>
										<p className="paragraph font-NeueMontreal text-blue-100 leading-relaxed">
											Where do you operate? What markets
											<br className="sm:hidden xm:hidden" /> do you serve? We need to
											understand your
											<br className="sm:hidden xm:hidden" /> global footprint to deliver
											seamless <br className="sm:hidden xm:hidden" />
											international communications that
											<br className="sm:hidden xm:hidden" />
											connect your teams worldwide.
										</p>
									</motion.div>
								</div>
								
								<div className="w-[50%] sm:w-full xm:w-full">
									<motion.div 
										className="flex flex-col gap-[20px] p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
										whileHover={{ y: -5, transition: { duration: 0.2 } }}
										transition={{ delay: 0.2 }}
									>
										<p className="paragraph font-NeueMontreal text-white underline decoration-cyan-300 decoration-2">
											Digital Transformation
										</p>
										<p className="paragraph font-NeueMontreal text-blue-100 leading-relaxed">
											How do you communicate today? Cloud-based
											<br className="sm:hidden xm:hidden" />
											or on-premise? Remote teams or centralized?
											<br className="sm:hidden xm:hidden" /> We analyze your current
											setup to modernize
											<br className="sm:hidden xm:hidden" /> your communications and
											enable future
											<br className="sm:hidden xm:hidden" /> growth opportunities.
										</p>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			
			{/* Subtle 3D Floating Elements */}
			<motion.div 
				className="absolute top-1/3 left-1/4 w-4 h-4 bg-cyan-400/40 rounded-full"
				animate={{
					y: [0, -20, 0],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			<motion.div 
				className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-blue-400/30 rounded-full"
				animate={{
					y: [0, -15, 0],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1
				}}
			/>
		</section>
	);
}