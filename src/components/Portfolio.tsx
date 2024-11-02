import React from "react";
import PysioEliezelImg from "../assets/garelly/pysioEliezel.png";

const Portfolio: React.FC = () => {
  return (
    <div>
      {/* Intro Section */}
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Navbar */}
        <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
          <div className="container mx-auto py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="w-8" src="./img/logo.png" alt="Logo" />
              <span className="text-2xl font-bold text-indigo-900 dark:text-white">
                Portwind.
              </span>
            </div>
            <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
              {["homepage", "about me", "services", "works", "contact"].map(
                (item) => (
                  <li key={item} className="hover:text-gray-500">
                    <a href={`#${item.replace(" ", "")}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
            <img
              id="moon"
              src="./img/moon.png"
              className="hidden md:block w-5 cursor-pointer"
              alt="Theme toggle"
            />
            <div
              id="hamburger"
              className="space-y-1 md:hidden cursor-pointer z-20"
            >
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
            <ul
              id="menu"
              className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
            >
              {["homepage", "about me", "services", "works", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a id="hLink" href={`#${item.replace(" ", "")}`}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        {/* Intro Content */}
        <img
          className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
          src="./img/man.png"
          alt="Man"
        />
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
          <span className="text-gray-600">Freelance</span>
          <p id="text" className="text-red-500"></p>
        </div>
        <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm John</h1>
          <p className="text-gray-400">
            with over 10 years of experience in web design and development.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. N oumquam
            quo provident, facere minus temporibus veniam nostrum reprehenderit
            nihil?
          </p>
          <a
            className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
            href="#contact"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* About Section */}
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
            <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
            <h1 className="text-3xl font-medium dark:text-white">
              Better Design
            </h1>
            <h1 className="text-3xl font-medium dark:text-white">
              Better Experience
            </h1>
            <p className="text-gray-400">
              I design and build digital products. I'm also a multi-disciplinary
              maker with over 10 years of experience in a wide range of design
              disciplines.
            </p>
            <h2 className="text-gray-400 font-medium">HTML</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-400 font-medium">Javascript</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-400 font-medium">React</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">SERVICES</h1>
            <h1 className="text-3xl dark:text-white">What do I offer?</h1>
            <p className="w-1/2 text-center text-gray-400">
              My approach to website design is to create a website that
              strengthens your company’s brand while ensuring ease of use and
              simplicity for your audience.
            </p>
          </div>
          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
              >
                <img className="w-10" src="./img/icon.png" alt="Service Icon" />
                <h1 className="font-medium text-lg dark:text-white">
                  UX / UI Design
                </h1>
                <p className="text-gray-400">
                  I specialize in creating interactive websites for individuals
                  and small businesses.
                </p>
                <a className="text-indigo-600 font-semibold text-sm" href="">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Works Section */}
      <div id="works" className="py-40 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
            <h1 className="text-3xl dark:text-white">Works & Projects</h1>
            <p className="w-1/2 text-center text-gray-400">
              I help designers, small agencies and businesses bring their ideas
              to life. Powered by Figma, VS Code and coffee, I turn your
              requirements into well-designed websites.
            </p>
          </div>
          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
              >
                <img src="./img/item.png" alt="Portfolio Item" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">CONTACT</h1>
            <h1 className="text-3xl dark:text-white">Have a Question?</h1>
            <p className="w-1/2 text-center text-gray-400">
              I am available for freelance work. Send me a message and let's get
              talking.
            </p>
          </div>
          <form className="flex flex-col items-center w-1/2 mx-auto py-10">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-200 rounded-md w-full p-3 mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-200 rounded-md w-full p-3 mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="bg-gray-200 rounded-md w-full p-3 mb-4 h-40"
            />
            <button className="bg-indigo-600 text-white font-semibold rounded-md p-3 w-full">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-10 bg-indigo-900 dark:bg-slate-800">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Portwind. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
