import React from "react";

// Import the SVG directly and replace the path accordingly
import resumeSvg from "/src/image/resume.svg";

function Header() {
  return (
    <div className="my-2 container text-4xl sm:text-2xl md:text-4xl lg:text-4xl mx-auto p-4 sm:flex-col flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-4">
        <p className="sm:text-2xl lg:text-6xl md:text-6xl font-bold mb-4 px-3 text-center">
          A <span className="text-blue-500 ">Resume</span> that stands out!
        </p>
        <p className="font-bold text-4xl px-3  sm:text-2xl md:text-6xl lg:text-6xl text-center">
          Make your own resume. <span className="text-blue-500">It's free</span>
        </p>
      </div>
      <div className="lg:w-1/2 lg:pl-4 mx-auto flex ">
        <img src={resumeSvg} alt="Resume" className="w-full sm:w-1/2 md:w-[75%] lg:w-[75%] " />
      </div>
    </div>
  );
}

export default Header;
