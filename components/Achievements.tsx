import React from "react";
import Link from "next/link";
import Image from "next/image";

const Achievements = () => {
  return (
    <div className="flex flex-col my-10">
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
        <Image
          src={"/line.svg"}
          alt="line"
          height={10}
          width={100}
          className="w-3/4 mx-auto rounded-full -my-2 xl:-my-3"
        />
        <div className="flex flex-row justify-end md:mx-11 xl:mx-24">
          <div className="my-10">
            <h1 className="text-[#003865] text-3xl font-bold">Achievement</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-black rounded-full w-48 h-48"></div>
        </div>
        <Image
          src={"/line.svg"}
          alt="line"
          height={10}
          width={100}
          className="w-3/4 mx-auto rounded-xl -my-2 xl:-my-3"
        />
        <div className="flex flex-row justify-start">
          <div className="bg-black rounded-full w-48 h-48 md:mx-11 xl:mx-24"></div>
          <div className="my-10">
            <h1 className="text-[#003865] text-3xl font-bold">Achievement</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <Image
          src={"/line.svg"}
          alt="line"
          height={10}
          width={100}
          className="w-3/4 mx-auto rounded-xl -my-2 xl:-my-3"
        />
      </div>
    </div>
  );
};

export default Achievements;
