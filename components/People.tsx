// import { gsap } from "gsap";
// import Carousel from "@/utils/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";

const People = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const carouselItems = [
  //   "/group.png",
  //   "/group.png",
  //   "/group.png",
  //   "/group.png",
  //   "/group.png",
  //   "/group.png",
  //   "/group.png",
  //   "/group.png",
  //   "/logo.png",
  // ]; // Array of carousel items (replace with your own data)
  // const carouselItemWidth = 50; // Width of carousel item (replace with your own value)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 1000); // Adjust the interval as desired (3000 milliseconds = 3 seconds)

  //   return () => clearInterval(interval);
  // });
  return (
    <div className="bg-[#00C2FF] mx-10 rounded-3xl" id="People">
      <h1 className="text-4xl text-white font-bold px-16 pt-10">Our Team</h1>
      <p className="text-white px-16 py-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
        minus!
      </p>
      <div className="grid grid-flow-col overflow-x-scroll space-x-10 my-10">
        <div className="rounded-full ml-20 w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <div className="rounded-full w-40 h-40 bg-white"></div>
      </div>
      {/* <div className="carousel">
        <div
          className="carousel-inner grid grid-flow-col overflow-x-hidden"
          style={{ marginLeft: -currentIndex * carouselItemWidth }}
        > */}
      {/* Render carousel items */}
      {/* {carouselItems.map((item, index) => (
            <div className="overflow-x-hidden" key={index}>
              <Image src={item} alt="images" width={300} height={300} className="rounded-full" />
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="stage">
        <div className="container">
          <div className="ring">
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default People;
