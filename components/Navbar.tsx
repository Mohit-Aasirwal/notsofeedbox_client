import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="fixed my-5 z-50 w-full">
        <div className="hidden md:flex mx-10 items-center justify-between bg-white rounded-xl h-16">
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
                className="font-bold text-lg bg-[#003865] text-white hover:text-black py-2 px-4 hover:bg-white delay-150 ease-linear rounded-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>{" "}
    </>
  );
};

export default Navbar;
