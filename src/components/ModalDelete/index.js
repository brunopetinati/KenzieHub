import { useDispatch } from "react-redux";
import { useState } from "react";
import { addWorksThunk } from "../../store/Modules/Works/thunk";

import ModalHeader from "../ModalHeader";
import SnackBar from "../SnackBar";
import axios from "axios";

import { ButtonStyled, Message } from "./styles";

const Delete = ({ page, id, setOpen }) => {
  const [showSnack, setShowSnack] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const token = localStorage.getItem("authToken");
    try {
      axios
        .delete(`https://kenziehub.me/users/${page}/${id}`, {
          headers: {
            Authorization: `Bearer: ${token}`,
            "Content-type": "application/json",
          },
        })
        .then((res) => dispatch(addWorksThunk()))
        .then(() => {
          setShowSnack(true);
        });
    } catch (error) {
      console.error(error);
    }
    setOpen(false);
  };

  return (
    <>
      <ModalHeader
        title={`Remove ${page === "techs" ? "Tech" : "Work"}`}
        setOpen={setOpen}
      />

      <Message>
        Are you sure you want to delete{" "}
        {page === "techs" ? "the Tech" : " the Work"}?
      </Message>

      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
      <SnackBar open={showSnack} severityValue="success" message="Deleted" />
    </>
  );
};
export default Delete;
