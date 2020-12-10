import Menu from "../Menu";

const Header = ({ isAuthenticated }) => {
  return <Menu isAuthenticated={isAuthenticated} />;
};

export default Header;
