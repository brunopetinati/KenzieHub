import { useState } from "react";
import { Backdrop, Fade } from "@material-ui/core";
import { ModalContainer, PaperContainer } from "./styles";
import Delete from "../ModalDelete";
import Add from "../ModalAdd";
import Edit from "../ModalEdit";
import ModalChangePhoto from "../ModalChangePhoto";
import ProfileUpdate from "../ProfileUpdate";
import ChangePassword from "../ChangePassword";

const TransitionsModal = ({ children, type, setAnchorEl }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const elementCaller = (type) => {
    switch (type) {
      case "update":
      case "changePassword":
        return (
          <label
            onClick={() => {
              handleOpen();
              setAnchorEl(null);
            }}
          >
            {children}
          </label>
        );
      case "changePhoto":
        return <div onClick={handleOpen}>{children}</div>;
      default:
        return (
          <button type="button" onClick={handleOpen}>
            {children}
          </button>
        );
    }
  };

  const componentRender = (type) => {
    switch (type) {
      case "delete":
        return <Delete />;
      case "edit":
        return <Edit />;
      case "add":
        return <Add />;
      case "changePhoto":
        return <ModalChangePhoto />;
      case "update":
        return <ProfileUpdate setOpen={setOpen} />;
      default:
        return <ChangePassword setOpen={setOpen} />;
    }
  };

  return (
    <div>
      {elementCaller(type)}
      <ModalContainer
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <PaperContainer>{componentRender(type)}</PaperContainer>
        </Fade>
      </ModalContainer>
    </div>
  );
};
export default TransitionsModal;
