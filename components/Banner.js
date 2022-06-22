import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  //name attribute is used for smooth scroll!
  return (
    <div name="banner" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, My Name is</p>
        <h1>Abhiram Satpute</h1>
        <h2>I&apos;m a Full Stack Developer</h2>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
