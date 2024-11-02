import NavBar from "./NavBar";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default Header;
