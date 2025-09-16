import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
	const phrase = ["ICOM"];
	const phrase1 = ["TELECOM"];
	
	return (
		<footer className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-telecomDark text-white flex flex-col justify-between rounded-t-[20px] mt-[-20px] overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
			
			{/* Floating Network Nodes */}
			<div className="absolute inset-0 overflow-hidden opacity-20">
				{[...Array(8)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-telecomAccent rounded-full animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
						}}
					/>
				))}
			</div>
			
			<div className="w-full flex justify-between sm:flex-col xm:flex-col relative z-10">
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-bold font-FoundersGrotesk text-white uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-bold font-FoundersGrotesk text-telecomAccent uppercase">
							<TextMask>{phrase1}</TextMask>
						</h1>
						
						{/* Services Section */}
						<div className="pt-[50px]">
							<h1 className="paragraph font-semibold font-NeueMontreal text-telecomAccent pb-[20px] flex items-center">
								<Globe className="w-5 h-5 mr-2" />
								Services:
							</h1>
							<div className="grid grid-cols-2 gap-2">
								{[
									"5G Infrastructure",
									"Enterprise VoIP", 
									"Cloud Communications",
									"Network Security",
									"Digital Transformation",
									"24/7 Support"
								].map((service, index) => (
									<LinkHover
										key={index}
										title={service}
										href="/services"
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/80 hover:text-telecomAccent capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/30 after:bg-telecomAccent"
									/>
								))}
							</div>
						</div>
						
						{/* Contact Info Grid */}
						<div className="flex justify-between pt-[50px]">
							<div className="space-y-6">
								<div>
									<h1 className="paragraph font-semibold font-NeueMontreal text-telecomAccent pb-[20px] flex items-center">
										<MapPin className="w-5 h-5 mr-2" />
										Locations:
									</h1>
									<div className="space-y-2">
										<div>
											<LinkHover
												className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/80 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/30 after:bg-white"
												title="New York Headquarters"
												href="/"
											/>
											<p className="text-sm text-white/60">123 Telecom Plaza, NY 10001</p>
										</div>
										<div>
											<LinkHover
												className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/80 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/30 after:bg-white"
												title="San Francisco Office"
												href="/"
											/>
											<p className="text-sm text-white/60">456 Tech Center Dr, CA 94105</p>
										</div>
									</div>
								</div>
							</div>
							
							<div>
								<h1 className="paragraph font-semibold font-NeueMontreal text-telecomAccent pb-[20px]">
									Navigation:
								</h1>
								<div className="space-y-2">
									{footernavbarItems.map((item) => (
										<LinkHover
											key={item.id}
											title={item.title}
											href={item.href}
											className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white/80 hover:text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] before:bg-white/30 after:bg-white"
										/>
									))}
								</div>
							</div>
						</div>
						
						{/* Contact Methods */}
						<div className="pt-[50px] space-y-4">
							<div className="flex items-center gap-4">
								<Mail className="w-5 h-5 text-telecomAccent" />
								<LinkHover
									title="hello@icomtelecom.com"
									href="mailto:hello@icomtelecom.com"
									className="before:h-[1px] after:h-[1px] paragraph font-medium text-white/80 hover:text-white before:bottom-[-3px] after:bottom-[-3px] before:bg-white/30 after:bg-white"
								/>
							</div>
							<div className="flex items-center gap-4">
								<Phone className="w-5 h-5 text-telecomAccent" />
								<LinkHover
									title="+1 (800) ICOM-TEL"
									href="tel:+18004266835"
									className="before:h-[1px] after:h-[1px] paragraph font-medium text-white/80 hover:text-white before:bottom-[-3px] after:bottom-[-3px] before:bg-white/30 after:bg-white"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Bottom Section */}
			<div className="w-full pt-[40px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px] border-t border-white/10 relative z-10">
				<div className="w-1/2 sm:w-full xm:w-full flex items-center gap-4">
					<Link href="/" className="flex items-center gap-3">
						<div className="w-12 h-12 bg-telecomAccent rounded-xl flex items-center justify-center">
							<Globe className="w-6 h-6 text-telecomDark" />
						</div>
						<div>
							<div className="text-lg font-bold text-white">ICOM TELECOM</div>
							<div className="text-xs text-white/60">Connecting Tomorrow</div>
						</div>
					</Link>
				</div>
				
				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					{/* Social Links */}
					<div className="flex gap-4">
						{[
							{ icon: Linkedin, href: "https://linkedin.com/company/icomtelecom" },
							{ icon: Twitter, href: "https://twitter.com/icomtelecom" },
							{ icon: Facebook, href: "https://facebook.com/icomtelecom" },
							{ icon: Instagram, href: "https://instagram.com/icomtelecom" },
						].map((social, index) => (
							<Link
								key={index}
								href={social.href}
								className="w-10 h-10 bg-white/10 hover:bg-telecomAccent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
							>
								<social.icon className="w-5 h-5 text-white hover:text-telecomDark" />
							</Link>
						))}
					</div>
					
					<div className="text-right sm:text-left xm:text-left">
						<div className="flex sm:flex-col xm:flex-col gap-[10px] text-sm text-white/60">
							<span>© ICOM Telecom 2024.</span>
							<LinkHover
								title="Privacy Policy"
								href="/privacy"
								className="before:h-[1px] after:h-[1px] text-white/60 hover:text-white before:bottom-[-3px] after:bottom-[-3px] before:bg-white/20 after:bg-white/60"
							/>
						</div>
						<div className="mt-2">
							<LinkHover
								title="Designed by ICOM Telecom"
								href="/"
								className="before:h-[1px] after:h-[1px] text-sm text-white/60 hover:text-white before:bottom-[-3px] after:bottom-[-3px] before:bg-white/20 after:bg-white/60"
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}