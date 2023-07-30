import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Line from "@/public/Line";
import { AchieveSec } from "@/types";

interface achieve {
  achievement: AchieveSec[];
}

const Achievements = () => {
  //   console.log(achievement);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex flex-col my-10"
      id="Achievements"
    >
      <Image
        src={"/ach-logo.svg"}
        alt="logo"
        width={500}
        height={100}
        className="mx-10"
      />
      <p className="text-[#00C2FF] md:text-xl md:mx-16 md:my-6">
        &quot;Unlocking Milestones, Embracing Success&quot;
      </p>
      <div className="flex flex-col md:my-6">
        <div className="lg:w-3/4 mx-auto rounded-xl lg:-my-2 xl:-my-3">
          <Line />
        </div>
        <div className="flex flex-row justify-end md:mx-11 xl:mx-24">
          <div className="my-10">
            <h1 className="text-[#003865] text-3xl font-bold">
              {/* {achievement.title} */}Recognized as MP&quot;s Young Achievers
            </h1>
            <p>
              {/* {achievement.description} */}
              By the Honourable Chief Minister of MP Mr. Shivaraj Singh Chouhan
              in the startup MSME category.
            </p>
          </div>
          <div className="bg-black xl:mx-20 rounded-full w-48 h-48 z-30">
            <Image
              src={
                "/yashsir.jpg"
                // process.env.NEXT_PUBLIC_API_BASE_URL +
                // achievement[0].attributes.img.data.attributes.url
              }
              alt="logo"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto rounded-xl -my-2 xl:-my-3 z-0">
          <Line />
        </div>
        <div className="flex flex-row justify-start">
          <div className="bg-black rounded-full w-48 h-48 md:mx-11 xl:mx-24 z-30">
            <Image
              src={
                "/ted.jpg"
                // process.env.NEXT_PUBLIC_API_BASE_URL +
                // achievement[1].attributes.img.data.attributes.url
              }
              alt="logo"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-full z-50"
            />
          </div>
          <div className="my-10">
            <h1 className="text-[#003865] text-3xl font-bold">
              {/* {achievement.title} */} Official Marketing Team of TedX Pandri
            </h1>
            <p>Well-Known Name worldwide with over millions of followers</p>
          </div>
        </div>
        <div className="w-3/4 mx-auto rounded-xl -my-2 xl:-my-3">
          <Line />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
