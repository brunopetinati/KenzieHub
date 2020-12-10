import { useLocation } from "react-router-dom";

// COMPONENTS
import MenuToggle from "../MenuToggle";
import MenuSearchBar from "../MenuSearchBar";
import MenuList from "../MenuList";

// STYLES
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Navigation, Container } from "./styles";

const Menu = ({ isAuthenticated }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { pathname } = useLocation();

  return (
    <Container>
      {isAuthenticated ? (
        <Navigation>
          {matches ? (
            <MenuToggle isAuthenticated={isAuthenticated} />
          ) : (
            <MenuList isAuthenticated={isAuthenticated} />
          )}
          {pathname === "/users" && <MenuSearchBar />}
        </Navigation>
      ) : (
        <Navigation>
          {matches ? (
            <MenuToggle isAuthenticated={isAuthenticated} />
          ) : (
            <MenuList isAuthenticated={isAuthenticated} />
          )}
          {pathname === "/users" && <MenuSearchBar />}
        </Navigation>
      )}
    </Container>
  );
};

export default Menu;
