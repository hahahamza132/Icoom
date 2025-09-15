"use client";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Expectations() {
	const [openItemId, setOpenItemId] = useState(null);

	const handleButtonClick = (id: any) => {
		setOpenItemId(openItemId === id ? null : id);
	};

	return (
		<section className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 padding-y rounded-t-[20px] relative overflow-hidden">
			{/* 3D Background Elements */}
			<div className="absolute inset-0 bg-blue-950/20"></div>
			<div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-blue-800 to-transparent"></div>
			
			<div className="w-full bg-transparent z-10 relative rounded-t-[20px]">
				<Marquee
					title="why choose icom telecom"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x py-[20px] relative z-10">
				<div className="w-full flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
					<div className="w-[50%] sm:w-full xm:w-full">
						<motion.h3 
							className="paragraph font-medium text-white font-NeueMontreal"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							What sets us apart?
						</motion.h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap gap-[20px]">
						{expectationsItems.map((item, index) => (
							<motion.div
								className="w-[345px] flex justify-between gap-x-[20px] sm:flex-col xm:flex-col gap-[20px]"
								key={item.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<motion.div 
									className="bg-gradient-to-br from-blue-800 to-blue-900 w-full flex flex-col rounded-[20px] px-[30px] py-[20px] border border-blue-600/30 shadow-xl"
									whileHover={{ 
										scale: 1.02,
										boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
										transition: { duration: 0.3 }
									}}
								>
									<div className="flex gap-x-[10px] items-center pb-[10px] mb-[100px] ">
										<h1 className="sub-heading font-normal font-NeueMontreal text-white">
											{item.title1}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="small-text font-normal font-NeueMontreal text-white">
											<TextHover
												titile1={item.subTitle1}
												titile2={item.subTitle1}
											/>
										</button>
										<motion.button
											onClick={() => handleButtonClick(item.id)}
											className="small-text uppercase font-normal font-NeueMontreal text-blue-300 hover:text-white transition-colors duration-300"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											{openItemId === item.id ? (
												"hide"
											) : (
												<TextHover
													titile1={item.btn}
													titile2={item.btn}
												/>
											)}
										</motion.button>
									</div>
									<AnimatePresence>
										{openItemId === item.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{
													ease: [0.4, 0, 0.2, 1],
													duration: 1,
												}}>
												<div className="border-t border-blue-600/30 pt-[20px] text-blue-100 mt-[10px] leading-relaxed">
													{item.para1}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			
			{/* 3D Bottom Edge */}
			<div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-blue-950 to-transparent"></div>
		</section>
	);
}