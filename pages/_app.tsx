import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
		<>
			<Navbar />
			{/* Add link to telecom app demo */}
			{router.route === '/' && (
				<div className="fixed top-20 right-4 z-50">
					<Link 
						href="/telecom-app"
						className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors text-sm font-medium"
					>
						📱 View Telecom App Demo
					</Link>
				</div>
			)}
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			<Footer />
		</>
	);
}
