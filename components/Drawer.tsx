import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative sm:flex md:hidden">
      <button
        className="text-black p-2 mx-4 my-5 rounded-full bg-white"
        onClick={handleOpen}
      >
        <HiMenuAlt1 />
      </button>
      {isDrawerOpen && (
        <div className="absolute top-0 h-screen w-3/4 p-4 bg-white shadow-lg rounded-md">
          <button
            className="absolute top-0 right-0 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            onClick={handleClose}
          >
            <span className="sr-only">Cancel</span>
            <MdOutlineCancel className="mx-3 w-7 h-7 my-4" />
          </button>
          <Link href={"/"} onClick={handleClose}>
            <Image src={"/logo.png"} width={100} height={100} alt="logo" />
          </Link>
          <ul
            onClick={handleClose}
            className="flex flex-col justify-start space-y-10 mx-3 my-10 font-semibold"
          >
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
                className="font-bold text-lg bg-[#B8F7D4] py-2 px-4 -mx-3 hover:bg-white delay-150 ease-linear rounded-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Drawer;
