import React from "react";

function Lists() {
  return (
    <>
      <div className="flex w-[90vw] md:w-full space-x-6 items-center justify-center border-b-dashed border-b pb-3 border-b-neutral/50">
        <div className="flex flex-col items-center justify-center text-primary">
          <h3 className="font-medium font-inter capitalize md:text-lg flex items-center justify-center text-center tracking-widest">
            May
          </h3>
          <h2 className="font-black text-4xl md:text-5xl font-seriff flex items-center justify-center text-center">
            14
          </h2>
        </div>
        <div className=" max-w-sm pt-3 space-y-1">
          <h1 className="font-black font-inter text-xl md:text-2xl text-secondary">
            The University’s 173rd Commencement
          </h1>
          <h3 className="font-medium font-inter">
            Outdoor Spaces, 600 - Malesardi Quadrangle
          </h3>
        </div>
      </div>
    </>
  );
}

export default Lists;
