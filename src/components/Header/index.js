import Menu from "../Menu";

// STYLES
import { Container } from "./styles";

const Header = ({ isAuthenticated }) => {
  return (
    <Container>
      <Menu isAuthenticated={isAuthenticated} />
    </Container>
  );
};

export default Header;