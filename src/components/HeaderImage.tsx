import React from "react";
import headerImage from "../assets/garelly/pysioEliezel.png";

const HeaderImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-200 to-blue-100">
      <div className="relative flex justify-center items-center">
        {/* Circle Background */}
        <div className="absolute bg-primary rounded-full w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"></div>

        {/* Image */}
        <img
          src={headerImage}
          alt="Person"
          className="relative w-48 h-auto md:w-64 lg:w-80 object-cover"
        />
      </div>
    </div>
  );
};

export default HeaderImage;
