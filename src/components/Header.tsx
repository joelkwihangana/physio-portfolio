import headerImage from "../assets/garelly/man.png";
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
        className=" absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
      />
    </>
  );
};

export default Header;
