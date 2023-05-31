import React from "react";
import { motion } from "framer-motion";

const animation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
    },
  },
};

function Timeline() {
  return (
    <>
      <ol className="pt-[10%] pl-[10%] md:h-[80vh] md:w-1/2 h-[50vh] overflow-y-scroll overflow-x-hidden">
        <motion.li
          variants={animation}
          initial="initial"
          whileInView="whileInView"
          // whileHover={{scale:1.1}}
          className="border-l-2"
        >
          <div className="md:flex flex-start">
            <div className="w-6 h-6 flex bg-black items-center justify-center rounded-full -ml-3.5"></div>
            <div className="block lg:p-6 md:px-0 p-6 max-w-lg  ml-2 md:mb-10 mb-1 font-semibold group duration-300 transition ease-in">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg group-hover:font-bold group-hover:text-secondary duration-300 group-hover:transition ease-in-out">
                  We Have An International Academic Community
                </h2>
              </div>
              <p className="lg:max-w-sm max-w-xs group-hover:max-w-md font-extralight text-sm group-hover:text-base group-hover:font-semibold duration-300 group-hover:transition ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </div>
        </motion.li>
        <motion.li
          variants={animation}
          initial="initial"
          whileInView="whileInView"
          className="border-l-2"
        >
          <div className="md:flex flex-start">
            <div className="w-6 h-6 flex bg-black items-center justify-center rounded-full -ml-3.5"></div>
            <div className="block lg:p-6 md:px-0 p-6 max-w-lg  ml-2 md:mb-10 mb-1 font-semibold group duration-300 transition ease-in">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg  group-hover:font-bold group-hover:text-secondary duration-300 group-hover:transition ease-in-out">
                  We Have An International Academic Community
                </h2>
              </div>
              <p className="max-w-sm group-hover:max-w-md font-extralight text-sm group-hover:text-base group-hover:font-semibold duration-300 group-hover:transition ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </div>
        </motion.li>
        <motion.li
          variants={animation}
          initial="initial"
          whileInView="whileInView"
          className="border-l-2"
        >
          <div className="md:flex flex-start">
            <div className="w-6 h-6 flex bg-black items-center justify-center rounded-full -ml-3.5"></div>
            <div className="block lg:p-6 md:px-0 p-6 max-w-lg ml-2 md:mb-10 mb-1 font-semibold group duration-300 transition ease-in">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg  group-hover:font-bold group-hover:text-secondary duration-300 group-hover:transition ease-in-out">
                  We Have An International Academic Community
                </h2>
              </div>
              <p className="max-w-sm group-hover:max-w-md font-extralight text-sm group-hover:text-base group-hover:font-semibold duration-300 group-hover:transition ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </div>
        </motion.li>
      </ol>
    </>
  );
}

export default Timeline;
