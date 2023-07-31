import React from "react";
import Header from "./Story/Header";
import Timeline from "./Story/Timeline";
import { motion } from "framer-motion";
import { TimelineSec } from "@/types";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      type: "spring",
      stiffness: 1000,
    },
  },
};

interface timeline {
  timeline: TimelineSec[];
}

const About = () => {
  return (
    <motion.div
      id="About"
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex md:flex-row flex-col"
    >
      <Header />
      <Timeline />
    </motion.div>
  );
};

export default About;
