import React, { useState } from "react";
import moonImage from "../assets/profile/moon.png";

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white dark:bg-slate-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-5 px-4 md:px-0">
        {/* Logo */}
        <span className="text-2xl font-bold text-primary dark:text-white">
          PhysioEliezel
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 uppercase text-gray-600 dark:text-gray-200">
          {["Home", "About Me", "Services", "Works", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-gray-800 dark:hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Icon */}
        <img
          src={moonImage}
          alt="Toggle Dark Mode"
          className="hidden md:block w-6 h-6 cursor-pointer"
        />

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden flex flex-col space-y-1 cursor-pointer z-20"
        >
          <div
            className={`w-6 h-0.5 bg-black ${
              showMenu ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {showMenu && (
        <ul className="md:hidden bg-primary dark:bg-slate-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl shadow-md space-y-6 text-center text-white uppercase">
          {["Home", "About Me", "Services", "Works", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
