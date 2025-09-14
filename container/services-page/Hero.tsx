import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full min-h-screen bg-gradient-to-br from-gray-700 via-gray-50 to-gray-200 relative overflow-hidden">
			{/* 3D Background Elements */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300/20 via-gray-200/10 to-transparent"></div>
			<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-300/30 to-transparent"></div>
			
			{/* Floating 3D Shapes */}
			<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 left-20 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl"></div>
			
			{/* 3D Grid Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
			
			<div className="w-full flex flex-col justify-between relative z-10">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x pt-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							<h1 className="heading tracking-[-1.3px] text-gray-900 font-semibold font-FoundersGrotesk uppercase drop-shadow-sm">
								services
							</h1>
						</motion.div>
					</div>
					
					{/* Animated Border Divider */}
					<motion.div 
						className="w-full border-t border-gray-300 relative"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 1.2, delay: 0.3 }}
					>
						<div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
						<div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
					</motion.div>
					
					<motion.div 
						className="w-full"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-gray-700 padding-y leading-relaxed">
							We deliver secure, scalable telecommunications — 5G, fiber, cloud voice, and enterprise connectivity — built to power modern business.
						</p>
					</motion.div>
					
					{/* Animated Border Divider */}
					<motion.div 
						className="w-full border-t border-gray-300 relative"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 1.2, delay: 0.7 }}
					>
						<div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
						<div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
					</motion.div>
					
					<div className="w-full flex py-[20px] flex-col">
						<motion.div 
							className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.9 }}
						>
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-gray-700">
									We do this by following <br /> simple approach:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<motion.div 
										className="flex flex-col gap-[20px] p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300"
										whileHover={{ y: -5, transition: { duration: 0.2 } }}
									>
										<p className="paragraph font-NeueMontreal text-gray-900 underline decoration-blue-400 decoration-2">
											Goal defines it all
										</p>
										<p className="paragraph font-NeueMontreal text-gray-700 leading-relaxed">
											What do you want to achieve?
											<br className="sm:hidden xm:hidden" /> Understanding the
											purpose of your <br className="sm:hidden xm:hidden" />
											presentation allows us to tailor it to ensure it
											<br className="sm:hidden xm:hidden" /> hits the mark and
											drives results.
										</p>
									</motion.div>
									
									<motion.div 
										className="flex flex-col gap-[20px] p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300"
										whileHover={{ y: -5, transition: { duration: 0.2 } }}
										transition={{ delay: 0.1 }}
									>
										<p className="paragraph font-NeueMontreal text-gray-900 underline decoration-purple-400 decoration-2">
											Audience is the hero
										</p>
										<p className="paragraph font-NeueMontreal text-gray-700 leading-relaxed">
											Who is it for? What do they want? Why
											<br className="sm:hidden xm:hidden" /> does it matter to
											them? We need to know
											<br className="sm:hidden xm:hidden" /> your audience well
											enough to deliver a <br className="sm:hidden xm:hidden" />
											personalized presentation that they truly
											<br className="sm:hidden xm:hidden" />
											care about.
										</p>
									</motion.div>
								</div>
								
								<div className="w-[50%] sm:w-full xm:w-full">
									<motion.div 
										className="flex flex-col gap-[20px] p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300"
										whileHover={{ y: -5, transition: { duration: 0.2 } }}
										transition={{ delay: 0.2 }}
									>
										<p className="paragraph font-NeueMontreal text-gray-900 underline decoration-amber-400 decoration-2">
											Context makes a difference
										</p>
										<p className="paragraph font-NeueMontreal text-gray-700 leading-relaxed">
											When do you present? Online or live? At a
											<br className="sm:hidden xm:hidden" />
											sales meeting, at a conference, or just
											<br className="sm:hidden xm:hidden" /> sending a cold
											email? We knit the context
											<br className="sm:hidden xm:hidden" /> together to decide
											the style of the
											<br className="sm:hidden xm:hidden" /> presentation.
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
				className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full"
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
				className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-purple-400/20 rounded-full"
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
