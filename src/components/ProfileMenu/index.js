//STYLES
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BiDotsVerticalRounded } from "react-icons/bi";

//STATE
import { useState } from "react";

//HOOKS
import { useHistory } from "react-router-dom";

const options = [
  "Update Profile Picture",
  "Update Profile Works",
  "Update Techs",
];

const ITEM_HEIGHT = 48;

const LongMenu = () => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUrl = (element) => {
    //PRECISO RECEBER O ID
    const id = "any";
    if (element === "Update Profile Works") {
      history.push(`/users/works/${id}`);
    }
    if (element === "Update Techs") {
      history.push(`/users/techs/${id}`);
    }
    return; //Modal
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiDotsVerticalRounded />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleUrl(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LongMenu;
