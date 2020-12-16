import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWorksThunk } from "../../store/Modules/Works/thunk";
import { ButtonStyled } from "./styles";
import ModalHeader from "../ModalHeader";
import axios from "axios";

const Delete = ({ page, id, setOpen }) => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params.id);
  const handleDelete = () => {
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwNzkxMzgsImV4cCI6MTYwODMzODMzOCwic3ViIjoiMDQ3ZTU3MTgtMDdhZS00NWUwLWEyNTYtMWZhOWEwMTg2OTg1In0.UkOuzr_QVX_fnLKLYYC8uGrSR1TVDnyukVvY0wQALQ0";
    // const token = localStorage.getItem("authToken");
    try {
      console.log(id);
      axios
        .delete(`https://kenziehub.me/users/${page}/${id}`, {
          headers: {
            Authorization: `Bearer: ${key}`,
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
        title={`Remover ${page === "techs" ? "Tecnologia" : "Trabalho"}`}
        setOpen={setOpen}
      />

      <h4>
        Tem certeza que deseja deletar{" "}
        {page === "techs" ? "a Tecnologia" : " o Trabalho"}?
      </h4>
      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
    </>
  );
};
export default Delete;
