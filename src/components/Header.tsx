import headerImage from "../assets/garelly/pysioEliezel.png";
import NavBar from "./NavBar";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <NavBar />
      <img
        src={headerImage}
        alt="pysioEliezel"
        className="object-cover 
            h-full w-full 
            md:w-3/4 lg:w-1/3 lg:h-auto 
            lg:absolute lg:top-0 lg:right-0 "
      />
    </>
  );
};

export default Header;
