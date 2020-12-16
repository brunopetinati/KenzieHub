import { useDispatch } from "react-redux";
import { addWorksThunk } from "../../store/Modules/Works/thunk";

import ModalHeader from "../ModalHeader";

import axios from "axios";

import { ButtonStyled } from "./styles";

const Delete = ({ page, id, setOpen }) => {
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
        .then((res) => dispatch(addWorksThunk()));
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

      <h4>
        Are you sure you want to delete{" "}
        {page === "techs" ? "the Tech" : " the Work"}?
      </h4>
      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
    </>
  );
};
export default Delete;
