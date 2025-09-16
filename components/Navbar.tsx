import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Globe, Signal } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<>
			<motion.nav
				variants={navVariants}
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 bg-primary/95 backdrop-blur-md border-b border-telecomBlue/10 flex items-center justify-between sm:hidden xm:hidden md:hidden shadow-telecom"
				animate={hidden ? "hidden" : "vissible"}>
				
				{/* Logo */}
				<div className="w-[50%]">
					<Link href="/" className="flex items-center gap-3 group">
						<div className="w-10 h-10 bg-telecomBlue rounded-xl flex items-center justify-center group-hover:bg-telecomDark transition-colors">
							<Globe className="w-5 h-5 text-white" />
						</div>
						<div>
							<div className="text-xl font-bold text-telecomDark group-hover:text-telecomBlue transition-colors">
								ICOM TELECOM
							</div>
							<div className="text-xs text-gray-500 -mt-1">Connecting Tomorrow</div>
						</div>
					</Link>
				</div>

				{/* Navigation Links */}
				<div className="flex gap-x-[30px] w-[50%] justify-end items-center">
					{navbarItems.map((item) => (
						<Link
							key={item.id}
							className={`relative paragraph font-medium font-NeueMontreal text-telecomDark hover:text-telecomBlue capitalize transition-colors duration-300 ${
								item.id === 5 && "ml-auto"
							}`}
							href={item.href}
						>
							<div className="relative overflow-hidden">
								<TextHover
									titile1={item.title}
									titile2={item.title}
								/>
							</div>
							{/* Active indicator */}
							<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-telecomBlue transition-all duration-300 group-hover:w-full"></div>
						</Link>
					))}
					
					{/* CTA Button */}
					<Link
						href="/contact"
						className="bg-telecomBlue hover:bg-telecomDark text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-telecom hover:shadow-telecom-lg transform hover:-translate-y-0.5 flex items-center gap-2"
					>
						<Signal className="w-4 h-4" />
						Get Started
					</Link>
				</div>
			</motion.nav>
			<MobileNav />
		</>
	);
}