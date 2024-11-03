import React from "react";
import PysioEliezelImg from "../assets/garelly/pysioEliezel.png";
import NavBar from "./NavBar";

const IntroSection: React.FC = () => {
  return (
    <>
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-secondary to-background dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Navbar */}
        <NavBar />

        {/* Intro Content */}
        <img
          className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
          src={PysioEliezelImg}
          alt="Eliezel Niyishoborabyose"
        />
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-primary rounded-full -z-10"></div>
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
          <span className="text-gray-600">Registered</span>
          <p id="text" className="text-accent">
            Physical Therapist
          </p>
        </div>
        <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-primary">Hi, I'm Eliezel</h1>
          <p className="text-gray-400">
            Dedicated and certified physical therapist with a focus on human
            movement, wellness coaching, and client-centered care. I empower
            clients to achieve their health and wellness goals through
            evidence-based rehabilitation and fitness programs.
          </p>
          <a
            className="bg-primary text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
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
