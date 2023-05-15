import React from "react";
import Carousel from "@/components/Carousel";
import Drawer from "@/components/Drawer";
//images to pass as props in carousel in mobile view.
const Images: any = [
  "",
  "",
  "", //image url's as needed
];

const Mobile = () => {
  return (
    <div>
      <Drawer />
      {/* <Carousel images={Images} /> */}
    </div>
  );
};

export default Mobile;
