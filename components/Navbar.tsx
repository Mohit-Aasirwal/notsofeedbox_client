import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex items-center justify-between bg-white my-10 rounded-xl h-20 mx-10">
        <Link href={"#Landing"}>
          {" "}
          <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        </Link>
        <ul className="flex flex-row justify-start space-x-16 mx-10 font-semibold items-center">
          <li className="hover:underline hover:text-lg ease-in-out">
            <Link href={"#About"}>Story</Link>
          </li>
          <li className="hover:underline hover:text-lg ease-in-out">
            <Link href={"#Achievements"}>Achievements</Link>
          </li>
          <li className="hover:underline hover:text-lg ease-in-out">
            <Link href={"#Events"}>Events</Link>
          </li>
          <li className="hover:underline hover:text-lg ease-in-out">
            <Link href={"#People"}>People</Link>
          </li>
          <li>
            <Link
              href={"#Contact"}
              className="font-bold text-lg bg-[#B8F7D4] py-2 px-4 hover:bg-white delay-150 ease-linear rounded-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
