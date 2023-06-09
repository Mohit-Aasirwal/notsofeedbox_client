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
        animate="visible"
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="img_bg gradient md:w-1/2 md:h-[90vh] h-[50vh] font-sans"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-bold text-4xl z-0 text-white relative top-[20%] lg:left-[20%] md:left-[10%] left-[8%]"
        >
          Our Club Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white relative font-extralight text-sm top-[22%] lg:left-[20%] md:left-[10%] left-[8%] lg:max-w-sm max-w-[17rem]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          maiores saepe natus aliquid ipsa dolor vitae quod expedita dolore modi
          quasi ab esse est fuga, atque aspernatur mollitia odio qui?
        </motion.p>
      </motion.div>
    </>
  );
}

export default Header;
