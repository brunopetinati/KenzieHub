import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

const MenuToggle = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </>
  );
};

export default MenuToggle;
