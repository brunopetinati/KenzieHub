import { useState } from "react";
import { Backdrop, Fade } from "@material-ui/core";
import { ModalContainer, PaperContainer } from "./styles";
import Delete from "../ModalDelete";
import Add from "../ModalAdd";
import Edit from "../ModalEdit";

const TransitionsModal = ({ children, type, page }) => {
  const [open, setOpen] = useState(false);

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
            {type === "delete" && <Delete page={page} />}
            {type === "edit" && <Edit page={page} />}
            {type === "add" && <Add page={page} />}
          </PaperContainer>
        </Fade>
      </ModalContainer>
    </div>
  );
};
export default TransitionsModal;
