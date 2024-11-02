import React from "react";
import headerImage from "../assets/garelly/pysioEliezel.png";

const IntroSection: React.FC = () => {
  return (
    <>
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <img
          className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
          src={headerImage}
          alt="Intro Image"
        />
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-5xl lg:left-5 xl:left-48 xl:text-6xl font-bold">
          <span className="text-gray-600 ">Registered</span>
          <p id="text" className="text-red-500 ">
            Physical Therapist
          </p>
        </div>
        <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-indigo-900">
            Hi, I'm Eliezel
          </h1>
          <p className="text-gray-400">
            I am a dedicated and certified professional with a strong background
            in physical therapy, personal training, and wellness coaching. My
            expertise in human movement, exercise science, and rehabilitation
            helps clients achieve their health and wellness goals.
          </p>
          <a
            className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
            href="#contact"
          >
            Connect with Me
          </a>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
