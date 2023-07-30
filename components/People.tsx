import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import { TeamSec } from "@/types";

interface Props {
  team: TeamSec[];
}

const team = [{}, {}, {}, {}];

const People = () => {
  // console.log(team);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      className="bg-[#00C2FF] mx-10 rounded-3xl"
      id="People"
    >
      <h1 className="text-4xl text-white font-bold px-16 pt-10">Our Team</h1>
      <p className="text-white px-16 py-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
        minus!
      </p>
      <div className="grid grid-flow-col overflow-x-scroll space-x-10 my-10">
        {team &&
          team.map((value: any, id: number) => {
            return (
              <motion.div
                initial={{ opacity: 0.4, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                key={id}
                className="rounded-full ml-20 w-40 h-40 bg-white"
              >
                <Image
                  src={
                    "/group.png"
                    // process.env.NEXT_PUBLIC_API_BASE_URL +
                    // team[0].attributes.img.data.attributes.url
                  }
                  alt="images"
                  width={100}
                  height={100}
                  className="rounded-full object-contain"
                />
              </motion.div>
            );
          })}
      </div>
    </motion.div>
  );
};

export default People;
