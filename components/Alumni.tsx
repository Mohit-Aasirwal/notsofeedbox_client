import Image from "next/image";
import React from "react";

const Alumni = () => {
  const alumni = [
    {
      name: "Rakshita Singhal",
      image: "/alumini4.jpg",
      description: "Elite Manager at CapgeMini and IIM Grad",
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
      name: "Ishita Gupta",
      image: "/ishita gupta.png",
      description: " Amazon",
    },
    {
      name: "Kanishk Tiwari",
      image: "/kanishk tiwari.png",
      description: " Amazon",
    },
    {
      name: "Lokesh Chugani",
      image: "/lokesh chugani.png",
      description: " Amazon",
    },

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
      name: "Pragya Patidar",
      image: "/pragya patidar.png",
      description: " Nuclei",
    },
  ];
  return (
    <div id="Alumni" className="md:my-20 my-20">
      <h2 className="text-6xl text-primary font-extrabold w-[90%] mx-auto">
        Our Alumni
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  w-[90%] overflow-y-scroll md:h-auto scrollbar-hide mx-auto gap-6 my-6">
        {alumni.map((alum, id) => (
          <div
            key={id}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg border-2 border-primary"
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
