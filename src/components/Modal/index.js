import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ModalContainer, PaperContainer } from "./styles";
import Delete from "../Delete";
import Add from "../Add";
import Edit from "../Edit";

const TransitionsModal = ({ children, type }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {children}
      </button>
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
          <PaperContainer>
          {type === "delete" && <Delete />}
          {type === "edit" && <Edit />}
          {type === "add" && <Add />}
          </PaperContainer>
        </Fade>
      </ModalContainer>
    </div>
  );
};
export default TransitionsModal;
