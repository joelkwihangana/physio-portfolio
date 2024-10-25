import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="p-4 bg-blue-500 text-white">
      <h1 className="text-3xl text-yellow-500 font-bold">{title}</h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}
    </header>
  );
};

export default Header;
