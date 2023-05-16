// import Image from "next/image";
// import React, { useState } from "react";

// const Carousel = ({ images:any }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images?.length) % images?.length
//     );
//   };

//   return (
//     <div className="relative">
//       <div className="overflow-hidden rounded-lg">
//         <Image
//           src={images && images[currentIndex]}
//           alt="Carousel Image"
//           className="w-full h-auto"
//         />
//       </div>
//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex space-x-2">
//         <button
//           className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
//           onClick={handlePrev}
//         >
//           Previous
//         </button>
//         <button
//           className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
