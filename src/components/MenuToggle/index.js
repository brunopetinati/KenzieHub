import { useState } from "react";
import { useHistory } from "react-router-dom";

// STYLES
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { MenuHamburguer } from "./styles";

const MenuToggle = ({ isAuthenticated }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const history = useHistory();

  return (
    <>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuHamburguer />
      </IconButton>

      {isAuthenticated ? (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          <MenuItem onClick={() => history.push("/users")}>
            Conheça nossos Devs
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => history.push("/")}>Login</MenuItem>
          <MenuItem onClick={() => history.push("/register")}>
            Register
          </MenuItem>
          <MenuItem onClick={() => history.push("/users")}>
            Conheça nossos Devs
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default MenuToggle;
