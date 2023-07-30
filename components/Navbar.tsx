import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav className="fixed my-5 z-50 w-full drop-shadow-xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:flex mx-10 items-center justify-between bg-white rounded-xl h-16"
        >
          <Link href={"#Landing"}>
            <Image
              priority
              src={"/logo.png"}
              width={100}
              height={100}
              alt="logo"
              className="xl:mx-5"
            />
          </Link>
          <ul className="flex flex-row justify-start space-x-16 mx-10 font-semibold items-center">
            <motion.li
              className=" ease-in-out"
              transition={{ delay: 0.1, duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Link href={"#About"}>Story</Link>
            </motion.li>
            <motion.li
              transition={{ delay: 0.1, duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              className="ease-in-out"
            >
              <Link href={"#Achievements"}>Achievements</Link>
            </motion.li>
            <motion.li
              transition={{ delay: 0.1, duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              className="lg ease-in-out"
            >
              <Link href={"#Alumni"}>Alumni</Link>
            </motion.li>
            <motion.li
              transition={{ delay: 0.1, duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              className="lg ease-in-out"
            >
              <Link href={"#Events"}>Events</Link>
            </motion.li>
            <motion.li
              transition={{ delay: 0.1, duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              className=" ease-in-out"
            >
              <Link href={"#People"}>People</Link>
            </motion.li>
            <motion.button
              type="button"
              transition={{ delay: 0.1, duration: 0.1 }}
              animate={{ textShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileHover={{
                scale: 1.2,
                // textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <Link
                href={"#Contact"}
                className="font-bold text-lg text-black py-2 px-4 hover:bg-white delay-150 ease-linear rounded-full"
              >
                Contact
              </Link>
            </motion.button>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
