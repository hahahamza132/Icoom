import Image from "next/image";
import { useState } from "react";
import { serviceProcessItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState(
		serviceProcessItems[0].id,
	);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y relative bg-gradient-to-b from-blue-50 to-white">
			{/* 3D Background Element */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 to-transparent -z-10 transform-gpu perspective-1000 rotate-x-2 scale-110 opacity-40"></div>
			
			<div className="w-full padding-x mb-[40px] relative">
				<motion.h1 
					className="sub-heading font-medium font-NeueMontreal text-blue-900"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					Our Telecommunications Process
				</motion.h1>
				<motion.p
					className="paragraph font-NeueMontreal text-blue-700 mt-4"
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					From network assessment to deployment and ongoing support
				</motion.p>
			</div>
			
			{serviceProcessItems.map((item, index) => (
				<motion.div
					key={item.id}
					className={`w-full flex py-[10px] flex-col relative ${
						item.id == 1
							? "border-y border-blue-200"
							: "border-b border-blue-200"
					}`}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					viewport={{ once: true }}
				>
					{/* 3D Depth Indicator */}
					<div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-500 ${activeAccordion === item.id ? 'opacity-100' : ''}`}></div>
					
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<motion.h3 
								className="paragraph font-normal font-NeueMontreal text-blue-800"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								{item.phase}
							</motion.h3>
						</div>
						<div className="w-[40%] sm:w-full xm:w-full">
							<motion.h3 
								className="paragraph font-medium font-NeueMontreal text-blue-900"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								{item.name}
							</motion.h3>
						</div>
						<div className="w-[10%] sm:w-full xm:w-full flex items-end justify-end">
							<motion.button
								className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
									activeAccordion === item.id
										? "text-blue-600 font-medium"
										: "text-blue-700"
								}`}
								onClick={() => toggleAccordion(item.id)}
								whileHover={{ 
									scale: 1.05,
									textShadow: "0px 0px 8px rgb(59, 130, 246)"
								}}
								whileTap={{ scale: 0.95 }}
							>
								{item.button}
							</motion.button>
						</div>
					</div>
					<div
						className={`w-full flex justify-between padding-x sm:flex-col xm:flex-col`}>
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[40%] sm:w-full xm:w-full">
							<AnimatePresence mode="wait">
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0, rotateX: -45 }}
										animate={{ 
											opacity: 1, 
											height: "auto", 
											rotateX: 0,
											transition: {
												opacity: { duration: 0.4 },
												height: { duration: 0.6 },
												rotateX: { duration: 0.5 }
											}
										}}
										exit={{ 
											opacity: 0, 
											height: 0,
											rotateX: -30,
											transition: {
												opacity: { duration: 0.3 },
												height: { duration: 0.5 },
												rotateX: { duration: 0.4 }
											}
										}}
										style={{ originY: 0, transformStyle: 'preserve-3d' }}
										className="bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-blue-200"
									>
										<motion.div 
											className="flex flex-col gap-[20px] py-[30px]"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.3, duration: 0.5 }}
										>
											<motion.div 
												className="w-[130px] h-[130px] overflow-hidden rounded-xl shadow-lg border border-blue-100"
												whileHover={{ 
													scale: 1.05, 
													rotateY: 5,
													transition: { duration: 0.3 }
												}}
											>
												<Image
													src={item.src}
													alt="process step"
													className="w-full h-full object-cover"
												/>
											</motion.div>
											<motion.div
												initial={{ y: 10, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.5, duration: 0.4 }}
											>
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-blue-800">
													{item.review}
												</p>
											</motion.div>
										</motion.div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%]" />
					</div>
				</motion.div>
			))}
		</section>
	);
}