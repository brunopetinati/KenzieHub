import { useState } from "react";
import { Backdrop, Fade } from "@material-ui/core";
import { ModalContainer, PaperContainer } from "./styles";
import Delete from "../ModalDelete";
import Add from "../ModalAdd";
import Edit from "../ModalEdit";
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

  return (
    <div>
      {type === "update" || type === "changePassword" ? (
        <label
          onClick={() => {
            handleOpen();
            setAnchorEl(null);
          }}
        >
          {children}
        </label>
      ) : (
        <button type="button" onClick={handleOpen}>
          {children}
        </button>
      )}
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
            {type === "update" && <ProfileUpdate setOpen={setOpen} />}
            {type === "changePassword" && <ChangePassword setOpen={setOpen} />}
          </PaperContainer>
        </Fade>
      </ModalContainer>
    </div>
  );
};
export default TransitionsModal;
