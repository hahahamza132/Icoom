"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { serviceCapaybilitiesItem } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Capibilyties() {
	const [hovered, setHovered] = useState(false);
	const [hovered1, setHovered1] = useState(false);
	const [activeImage, setActiveImage] = useState(null);
	
	return (
		<div className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 padding-y rounded-t-[20px] shadow-2xl relative overflow-hidden">
			{/* 3D Background Elements */}
			<div className="absolute inset-0 bg-blue-950/20 z-0"></div>
			<div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-blue-800 to-transparent z-10"></div>
			
			{/* Floating 3D Elements */}
			<div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
			<div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
			
			<div className="w-[82%] sm:w-full xm:w-full padding-x mb-[70px] relative z-20">
				<motion.h1 
					className="sub-heading font-medium font-NeueMontreal text-white"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer text-blue-300 hover:text-white transition-colors duration-300">
						Let's be honest.
					</span>
					&nbsp;There are really no excuses to have a bad presentation anymore.
					No one has time for poorly communicated ideas. Focus on what you do
					best <span className="sm:hidden xm:hidden">—</span>
					growing your business, while we do our best at
					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer text-blue-300 hover:text-white transition-colors duration-300">
						&nbsp;making your presentations awesome.
					</span>
				</motion.h1>
			</div>
			
			<div className="w-full flex sm:flex-col xm:flex-col justify-between py-[20px] padding-x border-t border-blue-600/40 sm:gap-[15px] xm:gap-[15px] relative z-20">
				<div className="w-[10%] sm:w-full xm:w-full">
					<motion.h3 
						className="paragraph font-medium text-white font-NeueMontreal flex items-center"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<span className="w-3 h-3 rounded-full bg-blue-400 mr-2 shadow-lg"></span>
						Our Capabilities:
					</motion.h3>
				</div>
				<div className="w-[90%] flex flex-col gap-y-[40px]">
					{serviceCapaybilitiesItem.map((item, index) => (
						<motion.div
							className="w-full flex sm:flex-col xm:flex-col justify-between sm:gap-[15px] xm:gap-[15px] relative"
							key={item.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							{/* 3D Image Preview Panel */}
							<div className="w-[40%] flex justify-end mr-[150px] sm:hidden xm:hidden sticky top-20 h-[300px]">
								<AnimatePresence mode="wait">
									{(hovered && item.id === 1) && (
										<motion.div
											initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
											animate={{ opacity: 1, scale: 1, rotateY: 0 }}
											exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
											transition={{ duration: 0.4 }}
											className="w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30 bg-blue-900/20 backdrop-blur-sm"
											style={{ transformStyle: 'preserve-3d' }}
										>
											<Image
												src={item.src1}
												alt="img"
												width={300}
												height={200}
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
										</motion.div>
									)}
									{(hovered1 && item.id === 1) && (
										<motion.div
											initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
											animate={{ opacity: 1, scale: 1, rotateY: 0 }}
											exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
											transition={{ duration: 0.4 }}
											className="w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30 bg-blue-900/20 backdrop-blur-sm"
											style={{ transformStyle: 'preserve-3d' }}
										>
											<Image
												src={item.src2}
												alt="img"
												width={300}
												height={200}
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
										</motion.div>
									)}
									{!hovered && !hovered1 && item.id === 1 && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="w-[300px] h-[200px] rounded-2xl flex items-center justify-center bg-blue-800/20 border-2 border-dashed border-blue-600/30 backdrop-blur-sm"
										>
											<p className="text-blue-300/70 font-medium">Hover over a capability to preview</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
							
							<div className="w-[25%] sm:w-full xm:w-full">
								<motion.div 
									className="flex gap-x-[10px] flex-col"
									whileHover={{ x: 5 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									<div className="flex items-center gap-x-[10px] pb-[20px]">
										<motion.span 
											className="w-[12px] h-[12px] rounded-full bg-blue-400 shadow-lg"
											whileHover={{ scale: 1.2 }}
										/>
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-white">
											{item.title1}
										</h1>
									</div>
								</motion.div>
								<div
									className="flex flex-col gap-y-[5px]"
									onMouseEnter={() => {
										setHovered(item.id === 1 && true);
										setHovered1(false);
									}}
									onMouseLeave={() => setHovered(false)}
								>
									{item.links1.map((link) => (
										<motion.div
											key={link.id}
											whileHover={{ x: 5 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
										>
											<Button
												href={link.href}
												title={link.title}
												className="text-blue-100 hover:text-white transition-colors duration-300"
											/>
										</motion.div>
									))}
								</div>
							</div>
							
							<div className="w-[25%] sm:w-full xm:w-full">
								<motion.div 
									className="flex gap-x-[10px] flex-col"
									whileHover={{ x: 5 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									<div className="flex items-center gap-x-[10px] pb-[20px]">
										<motion.span 
											className="w-[12px] h-[12px] rounded-full bg-blue-400 shadow-lg"
											whileHover={{ scale: 1.2 }}
										/>
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-white">
											{item.title2}
										</h1>
									</div>
								</motion.div>
								<div
									className="flex flex-col gap-y-[5px]"
									onMouseEnter={() => {
										setHovered1(item.id === 1 && true);
										setHovered(false);
									}}
									onMouseLeave={() => setHovered1(false)}
								>
									{item.links2.map((link) => (
										<motion.div
											key={link.id}
											whileHover={{ x: 5 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
										>
											<Button
												href={link.href}
												title={link.title}
												className="text-blue-100 hover:text-white transition-colors duration-300"
											/>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			
			{/* 3D Bottom Edge */}
			<div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-blue-950 to-transparent z-10"></div>
		</div>
	);
}