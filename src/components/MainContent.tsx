import React from "react";
import headerImage from "../assets/garelly/pysioEliezel.png";

const MainComponent: React.FC = () => {
  return (
    <>
      <div className="container h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <img
          src={headerImage}
          alt="pysioEliezel"
          className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
        />
        {/* circle  */}
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-primary rounded-full -z-10"></div>
      </div>
    </>
  );
};

export default MainComponent;
