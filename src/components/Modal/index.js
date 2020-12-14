import { useState } from "react";
import { Backdrop, Fade } from "@material-ui/core";
import { ModalContainer, PaperContainer, ButtonContainer } from "./styles";
import Delete from "../ModalDelete";
import Add from "../ModalAdd";
import Edit from "../ModalEdit";
import { BsPlusCircleFill } from "react-icons/bs";
import Button from "../../components/Button";

const TransitionsModal = ({ children, type, page, color }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonContainer>
        {type === "add" ? (
          <BsPlusCircleFill onClick={handleOpen} />
        ) : (
          <button className={type} type="button" onClick={handleOpen}>
            {children}
          </button>
        )}
      </ButtonContainer>

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
