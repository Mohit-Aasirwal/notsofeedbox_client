// import { Inter } from "next/font/google";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import UpcomingEve from "@/components/Events/UpcomingEve";
import Header from "@/components/Story/Header";
import Timeline from "@/components/Story/Timeline";

export default function Home() {
	return (
		<>
			{/* Story Section */}
			<div className="w-full border border-black">
				<div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden lg:h-[90vh] h-auto">
					{/* Story Header */}
					<Header />
					{/* Story Timeline */}
					<Timeline />
				</div>
			</div>
			<div className="">
				<UpcomingEve />
			</div>
		</>
	);
}
