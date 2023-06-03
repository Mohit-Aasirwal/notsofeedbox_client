import React from "react";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Drawer from "@/components/Drawer";
import Stats from "@/components/Stats";
//images to pass as props in carousel in mobile view.
const images: any = [
  "",
  "",
  "", //image url's as needed
];

const Mobile = () => {
  return (
    <div>
      <Drawer />
      <Carousel images={images} />
      <About />
      <Stats />
    </div>
  );
};

export default Mobile;
