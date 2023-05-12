import UpcomingEve from "@/components/Events/UpcomingEve";
import Header from "@/components/Story/Header";
import Timeline from "@/components/Story/Timeline";
import Footer from "@/components/Footer";

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
      <Footer/>
		</>
	);
}