import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="p-4 bg-gradient-to-r from-primary to-secondary text-white shadow-md">
      <div className="container mx-auto p-5 flex flex-wrap flex-col md:flex-row items-center">
        <a
          href="#"
          className="flex flex-col font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="text-2xl font-bold">{title}</span>
          {subtitle && (
            <span className="text-sm text-gray-200">{subtitle}</span>
          )}
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#services" className="mr-5 hover:text-gray-200">
            Services
          </a>
          <a href="#about" className="mr-5 hover:text-gray-200">
            About
          </a>
          <a href="#testimonials" className="mr-5 hover:text-gray-200">
            Testimonials
          </a>
          <a href="#contact" className="mr-5 hover:text-gray-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
