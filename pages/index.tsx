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
import { useState, useEffect } from "react";
import Head from "next/head";
export default function Home() {
  // useEffect(() => {
  //   // Track mouse movement
  //   const handleMouseMove = (event: any) => {
  //     const cursor = document.querySelector(".custom-cursor");
  //     if (cursor) {
  //       cursor.style.top = `${event.pageY}px`;
  //       cursor.style.left = `${event.pageX}px`;
  //     }
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     // Clean up the event listener
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Club FeedBox</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
      // className={"custom-cursor"}
      >
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
    </>
  );
}
