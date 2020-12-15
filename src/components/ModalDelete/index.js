import { ButtonStyled } from "./styles";
import ModalHeader from "../ModalHeader";
import axios from "axios";

const Delete = ({ page, id, close }) => {
  const handleDelete = async (data) => {
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc3ODg5MzcsImV4cCI6MTYwODA0ODEzNywic3ViIjoiMDQ3ZTU3MTgtMDdhZS00NWUwLWEyNTYtMWZhOWEwMTg2OTg1In0.OzvYFEvabPb-eyFtFnCZToLcy1ZXJ6BoIdlHGTrUrxE";
    // const token = localStorage.getItem("authToken");

    try {
      await axios.delete(`https://kenziehub.me/users/${page}/${id}`, {
        headers: {
          Authorization: `Bearer: ${key}`,
          "Content-type": "application/json",
        },
      });
      await window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ModalHeader>
        Remover <span onClick={close}>x</span>{" "}
      </ModalHeader>
      <h4>
        Tem certeza que deseja deletar{" "}
        {page === "techs" ? "a Tecnologia" : " o Trabalho"}?
      </h4>
      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
    </>
  );
};
export default Delete;
