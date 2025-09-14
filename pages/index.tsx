"use client";
import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome } from "@/container";
import ImageSwiper from "../container/home-page/Swiper";
export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Hero />
			   <ImageSwiper/>
				<About />
				<VideoHome />
			
			
			</Curve>
		</>
	);
}
