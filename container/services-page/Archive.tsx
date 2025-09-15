import { background } from "@/public";
import { achiveItems } from "@/constants";
import { BackgroundImg } from "@/components";
import { TextMask } from "@/animation";
import { motion } from "framer-motion";

export default function Archive() {
	return (
		<section className="w-full bg-gradient-to-b from-blue-50 to-white">
			<div className="padding-x w-full">
				<BackgroundImg src={background} />
			</div>
			<div className="w-full padding-y">
				<div className="w-full padding-x pt-[20px] border-t border-blue-200 flex sm:flex-col xm:flex-col justify-between gap-y-[20px]">
					<div className="w-[50%] sm:w-full xm:w-full">
						<motion.h3 
							className="paragraph font-medium font-NeueMontreal text-blue-900"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							ICOM Telecom by the numbers:
						</motion.h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[20px]">
						{achiveItems.map((item, index) => (
							<motion.div
								className="w-full flex justify-between gap-[20px] sm:flex-col xm:flex-col"
								key={item.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<motion.div 
									className="bg-gradient-to-br from-blue-100 to-blue-50 w-full flex flex-col gap-y-[150px] rounded-[20px] px-[30px] py-[20px] border border-blue-200 shadow-lg"
									whileHover={{ 
										scale: 1.02,
										boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
										transition: { duration: 0.3 }
									}}
								>
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-blue-900">
											<TextMask>{item.title1}</TextMask>
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<p className="paragraph font-normal font-NeueMontreal text-blue-700">
											{item.subTitle1}
										</p>
									</div>
								</motion.div>
								<motion.div 
									className="bg-gradient-to-br from-cyan-100 to-blue-50 w-full flex flex-col gap-y-[150px] rounded-[20px] px-[30px] py-[20px] border border-cyan-200 shadow-lg"
									whileHover={{ 
										scale: 1.02,
										boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
										transition: { duration: 0.3 }
									}}
								>
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-cyan-900">
											<TextMask>{item.title2}</TextMask>
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<p className="paragraph font-normal font-NeueMontreal text-cyan-700">
											{item.subTitle2}
										</p>
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}