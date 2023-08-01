import React from "react";
import { motion } from "framer-motion";

function Header() {
  const handleVariants = {
    hidden: {
      opacity: 0,
      // x: -1000,
    },
    visible: {
      // opacity: 1,
      // x: 0,
      // transition: {
      //   delay: 1.5,
      //   duration: 2,
      //   type: "spring",
      //   stiffness: 1000,
      // },
    },
  };
  return (
    <>
      <motion.div
        variants={handleVariants}
        initial="hidden"
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="img_bg gradient md:w-1/2 md:h-[90vh] h-[50vh] font-sans"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-bold text-4xl z-0 text-white relative top-[20%] lg:left-[20%] md:left-[10%] left-[8%]"
        >
          Our Club Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white relative font-extralight text-xs md:text-lg md:w-auto top-[22%] lg:left-[20%] md:left-[10%] left-[8%] lg:max-w-sm max-w-[17rem]"
        >
          Founded with the vision to foster digital skills among the college
          freshmen, we are among one of the most active club of IET. “A journey
          of a thousand miles begins with a single step.” Following to these On
          Nov 2015 ,the journey of Feedbox was initiated as a college club with
          7 students. With this start, team of 25 members started creating viral
          content on social media and one of our social page reached about 1.6
          million people in just 7 days and there after ,under the leadership of
          Yash Kulshrestha sir the journey has started with designing and
          marketing for various events and brands across India.
        </motion.p>
      </motion.div>
    </>
  );
}

export default Header;
