import Image from "next/image";
import React from "react";

const Alumni = () => {
  const alumni = [
    {
      name: "Nishi Chauhan",
      image: "/alumini1.jpg",
      description: " Goldman Sachs",
    },
    {
      name: "Pratiksha Gupta",
      image: "/alumini2.jpg",
      description: " FactSet",
    },
    {
      name: "Anirudha Dubey",
      image: "/alumini3.jpg",
      description: " Nuclei",
    },
    {
      name: "Rakshita Singhal",
      image: "/alumini4.jpg",
      description: "Elite Manager at CapgeMini",
    },
    {
      name: "Abhinav Jain",
      image: "/alumini5.jpg",
      description: " VMware",
    },
    {
      name: "Anurag Pal",
      image: "/1664170204305.png",
      description: " Nuclei",
    },
    {
      name: "Shantanu Choudhary",
      image: "/Shantanu.png",
      description: " ZS Associates",
    },
    {
      name: "Akshat Parakh",
      image: "/akshat_jain.png",
      description: " ZS Associates",
    },
    {
      name: "Ishita Gupta",
      image: "/ishita gupta.png",
      description: " Amazon",
    },
    {
      name: "Rubi Jain",
      image: "/rubi jain.png",
      description: "CAT 99.03 Percentile, FMS Delhi 2k24",
    },
    {
      name: "Yash Sachdeo",
      image: "/yash sachdeo.png",
      description: "IIM Calcutta, 2k22 batch",
    },
    {
      name: "Lokesh Chugani",
      image: "/lokesh chugani.png",
      description: " Amazon",
    },
    {
      name: "Pragya Patidar",
      image: "/pragya patidar.png",
      description: " Nuclei",
    },
    {
      name: "Kanishk Tiwari",
      image: "/kanishk tiwari.png",
      description: " Amazon",
    },
  ];
  return (
    <div id="Alumni" className="md:my-20 my-20">
      <h2 className="text-6xl text-primary font-extrabold w-[90%] mx-auto">
        Our Alumni
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-[90%] mx-auto gap-6 my-6">
        {alumni.map((alum, id) => (
          <div
            key={id}
            className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-neutral"
          >
            <Image
              className="w-full"
              width={200}
              height={200}
              src={alum.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{alum.name}</div>
              <p className="text-gray-700 text-base">{alum.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
