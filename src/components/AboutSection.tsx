import React from "react";
import PysioEliezelImg from "../assets/garelly/pysioEliezel.png";

const AboutSection: React.FC = () => {
  return (
    <>
      {" "}
      <div id="about" className="px-10 dark:bg-slate-900">
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="relative">
            <img
              className="h-1/4 absolute top-0 left-0 -z-10"
              src="./img/dots.png"
              alt="Dots"
            />
            <div className="h-full rounded-full overflow-hidden">
              <img src={PysioEliezelImg} alt="Portrait" />
            </div>
          </div>
          <div className="my-auto flex flex-col gap-3">
            <h1 className="text-primary font-bold">ABOUT ME</h1>
            <h1 className="text-3xl font-medium dark:text-white">
              Physical Therapy & Wellness Coaching
            </h1>
            <p className="text-gray-400">
              As a licensed physical therapist with certifications in human
              movement and personal training, I specialize in exercise
              physiology, manual therapy, client care, and wellness. My goal is
              to guide clients in achieving optimal physical health and
              wellness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
