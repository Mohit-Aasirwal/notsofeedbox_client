import UpcomingEve from "@/components/Events/UpcomingEve";
import Header from "@/components/Story/Header";
import Timeline from "@/components/Story/Timeline";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Achievement from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Drawer from "@/components/Drawer";
import ConditionalRender from "@/layouts/ConditionalRender";
import Window from "@/layouts/Window";
export default function Home() {
  return (
    <div className="" id="wrapper">
      {/* <Window/> */}
      {/* <Navbar />
	  <Drawer/>
      <Landing />
      <About />
      <Achievement /> */}
      <ConditionalRender />
      {/* Story Section */}
      {/* <div className="w-full border border-black">
        <div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden lg:h-[90vh] h-auto"> */}
      {/* Story Header */}
      {/* <Header /> */}
      {/* Story Time
          line */}
      {/* <Timeline />
        </div>
      </div>
      <div className="">
        <UpcomingEve />
      </div>
      <Contact />
      <Footer /> */}
    </div>
  );
}
