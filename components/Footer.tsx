import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="w-full md:h-1/5 flex flex-col md:grid md:grid-cols-3 md:my-10 bg-white">
        <Link
          href={"https://www.feedbox.co.in"}
          className="mx-auto md:mx-5 md:my-auto"
        >
          <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        </Link>
        <h1 className="font-bold md:mx-2 mx-auto text-xl md:hidden">
          Quick Links
        </h1>
        <ul className="mx-auto font-semibold  md:flex md:space-x-8 md:my-auto text-[#151B31]">
          <motion.li
            transition={{ delay: 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.2 }}
            className="hover:underline"
          >
            <Link href={"/"}>Home</Link>
          </motion.li>
          <motion.li
            transition={{ delay: 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.2 }}
            className="hover:underline"
          >
            <Link href={"#About"}>About</Link>
          </motion.li>
          <motion.li
            transition={{ delay: 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.2 }}
            className="hover:underline"
          >
            <Link href={"#Contact"}>Contact</Link>
          </motion.li>
        </ul>
        <ul className="flex justify-center items-center md:justify-center md:items-start md:my-auto space-x-5 my-5">
          <motion.li
            transition={{ delay: 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <Link href={"/"}>
              <AiOutlineInstagram className="w-7 h-7" />
            </Link>
          </motion.li>
          <motion.li
            transition={{ delay: 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <Link href={"/"}>
              <AiOutlineTwitter className="w-7 h-7" />
            </Link>
          </motion.li>
          <motion.li
            transition={{ delay: 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <Link href={"/"}>
              <AiOutlineGithub className="w-7 h-7" />
            </Link>
          </motion.li>
        </ul>
        <h6 className="mx-auto col-span-3 text-gray-400 text-xs">
          © ClubFeedbox, All Rights Reserved 2023
        </h6>
      </div>
    </>
  );
};

export default Footer;
