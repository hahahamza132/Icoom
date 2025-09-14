import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	const phrase = ["Eye-", "opening"];
	const phrase1 = ["PRESENTATIONS"];
	
	return (
		<footer className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col justify-between rounded-t-[20px] mt-[-20px] transform-gpu perspective-1000">
			{/* 3D Top Edge Effect */}
			<div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-blue-700 to-blue-800 rounded-t-[20px] shadow-2xl"></div>
			
			<div className="w-full flex justify-between sm:flex-col xm:flex-col relative z-10">
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-white uppercase transform-gpu hover:translate-z-10 transition-transform duration-700">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-white uppercase transform-gpu hover:translate-z-10 transition-transform duration-700">
							<TextMask>{phrase1}</TextMask>
						</h1>
						<div className="pt-[50px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-white/90 pb-[20px]">
								S:
							</h1>
							{footerItems.map((item) => (
								<LinkHover
									title={item.title}
									href={item.href}
									key={item.id}
									className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/90 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/50 after:bg-white"
								/>
							))}
						</div>
						<div className="flex justify-between">
							<div className="pt-[50px]">
								<h1 className="paragraph font-medium font-NeueMontreal text-white/90 pb-[20px]">
									L:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/90 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/50 after:bg-white"
										title={`202-1965 W 4th Awe`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/90 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/50 after:bg-white"
										title={`Vancouver, Canada`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/90 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/50 after:bg-white"
										title="30 Chukarina"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/90 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/50 after:bg-white"
										title="St Lviv, Ukraine"
										href="/"
									/>
								</div>
							</div>
							<div className="pt-[50px]">
								<h1 className="paragraph font-medium font-NeueMontreal text-white/90 pb-[20px]">
									M:
								</h1>
								{footernavbarItems.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/90 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/50 after:bg-white"
									/>
								))}
							</div>
						</div>
						<div className="pt-[50px] flex gap-x-[20px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-white/90">
								E:
							</h1>
							<LinkHover
								title="hello@IcomTelecom"
								href="/"
								className="before:h-[1px] after:h-[1px] paragraph font-medium text-white/90 hover:text-white before:bottom-[-3px] after:bottom-[-3px] before:bg-white/50 after:bg-white"
							/>
						</div>
					</div>
				</div>
			</div>
			
			{/* 3D Middle Layer */}
			<div className="absolute inset-x-6 bottom-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-lg"></div>
			
			<div className="w-full pt-[40px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px] relative z-10">
				<div className="w-1/2 sm:w-full xm:w-full transform-gpu hover:-translate-y-1 transition-transform duration-300">
					<Link href={"/"}>
						<div className="relative">
							<Image
								src={logo}
								alt="IcomTelecom logo"
								width={70}
								height={70}
								className="drop-shadow-lg filter brightness-125 transform-gpu hover:scale-110 transition-transform duration-500"
							/>
							{/* 3D shine effect on logo */}
							<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full pointer-events-none"></div>
						</div>
					</Link>
				</div>
				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<h1 className="paragraph font-medium font-NeueMontreal text-white/60">
							© IcomTelecom design 2024.
						</h1>
						<LinkHover
							title="Legal Terms"
							href="/"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-white/60 hover:text-white before:bottom-[-3px] after:bottom-[-3px] before:bg-white/30 after:bg-white/60"
						/>
					</div>
					<div>
						<LinkHover
							title="Website by Zain"
							href="/"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-white/60 hover:text-white before:bottom-[-3px] after:bottom-[-3px] before:bg-white/30 after:bg-white/60"
						/>
					</div>
				</div>
			</div>
			
			{/* 3D Bottom Edge */}
			<div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-blue-800 to-blue-900 rounded-b-[20px] shadow-inner-xl"></div>
		</footer>
	);
}