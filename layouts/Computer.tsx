import React from "react";
import UpcomingEve from "@/components/Events/UpcomingEve";
import Header from "@/components/Story/Header";
import Timeline from "@/components/Story/Timeline";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Achievement from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Stats from "@/components/Stats";
import People from "@/components/People";
const Computer = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Stats />
      <About />
      <Achievement />
      <UpcomingEve />
      <People />
      <Contact />
      <Footer />
    </div>
  );
};

export default Computer;
