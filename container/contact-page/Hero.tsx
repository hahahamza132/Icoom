import Image from "next/image";
import { contactHero } from "@/public";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen bg-primary relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.08)_0%,transparent_50%)]"></div>
			<div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,204,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,204,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
			
			<div className="max-w-7xl mx-auto padding-x relative z-10">
				<div className="w-full flex flex-col justify-center min-h-screen">
					{/* Header Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-2 bg-telecomLight border border-telecomBlue/20 rounded-full px-6 py-3 mb-8">
							<MessageCircle className="w-5 h-5 text-telecomBlue" />
							<span className="text-telecomDark font-semibold">Get In Touch</span>
						</div>
						
						<h1 className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xm:text-3xl font-bold text-telecomDark mb-6 leading-tight">
							Let's Build Your
							<br />
							<span className="text-telecomBlue">Communication Future</span>
						</h1>
						
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
							Ready to transform your telecommunications infrastructure? 
							Our experts are here to design the perfect solution for your business needs.
						</p>
					</motion.div>

					{/* Contact Methods Grid */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
					>
						{[
							{
								icon: Phone,
								title: "Call Us",
								subtitle: "Speak with our experts",
								contact: "+1 (800) ICOM-TEL",
								href: "tel:+18004266835",
								color: "from-blue-500 to-blue-600"
							},
							{
								icon: Mail,
								title: "Email Us",
								subtitle: "Get detailed information",
								contact: "hello@icomtelecom.com",
								href: "mailto:hello@icomtelecom.com",
								color: "from-green-500 to-green-600"
							},
							{
								icon: MapPin,
								title: "Visit Us",
								subtitle: "Our headquarters",
								contact: "123 Telecom Plaza, NY",
								href: "#",
								color: "from-purple-500 to-purple-600"
							}
						].map((method, index) => (
							<motion.a
								key={index}
								href={method.href}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 * index }}
								className="group bg-white rounded-3xl p-8 shadow-telecom hover:shadow-telecom-lg border border-gray-100 hover:border-telecomBlue/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 block"
							>
								<div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<method.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-telecomDark mb-2 group-hover:text-telecomBlue transition-colors">
									{method.title}
								</h3>
								<p className="text-gray-600 mb-4">{method.subtitle}</p>
								<p className="text-telecomBlue font-semibold text-lg">{method.contact}</p>
							</motion.a>
						))}
					</motion.div>

					{/* CTA Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-center bg-white rounded-3xl p-12 shadow-telecom-lg border border-gray-100"
					>
						<h2 className="text-4xl font-bold text-telecomDark mb-4">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
							Fill out our contact form below and one of our telecommunications 
							experts will reach out to discuss your project requirements.
						</p>
						<div className="inline-flex items-center gap-2 text-telecomBlue font-semibold">
							<span>Complete the form below</span>
							<motion.div
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								↓
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}