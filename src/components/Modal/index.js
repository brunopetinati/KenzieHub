import { useState } from "react";
import { Backdrop, Fade } from "@material-ui/core";
import { ModalContainer, PaperContainer } from "./styles";
import Delete from "../ModalDelete";
import Add from "../ModalAdd";
import Edit from "../ModalEdit";
import Upload from "../ModalPhotoUpdate";
import ModalChangePhoto from "../ModalChangePhoto";

const TransitionsModal = ({ children, type }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const elementCaller = (type) => {
    switch (type) {
      case "upload":
        return <label onClick={handleOpen}>{children}</label>;
      case "changePhoto":
        return (
          <div className="teste" onClick={handleOpen}>
            {children}
          </div>
        );
      default:
        return (
          <button type="button" onClick={handleOpen}>
            {children}
          </button>
        );
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
          <PaperContainer>
            {type === "delete" && <Delete />}
            {type === "edit" && <Edit />}
            {type === "add" && <Add />}
            {type === "upload" && <Upload />}
            {type === "changePhoto" && <ModalChangePhoto />}
          </PaperContainer>
        </Fade>
      </ModalContainer>
    </div>
  );
};
export default TransitionsModal;
