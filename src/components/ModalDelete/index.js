import { ButtonStyled } from "./styles";
import ModalHeader from "../ModalHeader";
import axios from "axios";
const Delete = ({ page, id }) => {
  console.log("inicio pagina", page);

  const handleDelete = (data) => {
    console.log(data);

    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc3ODg5MzcsImV4cCI6MTYwODA0ODEzNywic3ViIjoiMDQ3ZTU3MTgtMDdhZS00NWUwLWEyNTYtMWZhOWEwMTg2OTg1In0.OzvYFEvabPb-eyFtFnCZToLcy1ZXJ6BoIdlHGTrUrxE";
    const token = localStorage.getItem("authToken");

    try {
      axios.delete(
        `https://kenziehub.me/users/${page}/f7798919-3d25-4b1f-b0a8-d46f094201dd`,
        {
          headers: {
            Authorization: `Bearer: ${key}`,
            "Content-type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }

    console.log(page);
  };

  return (
    <>
      <ModalHeader>Remover </ModalHeader>
      <h4>
        Tem certeza que deseja deletar{" "}
        {page === "techs" ? "a Tecnologia" : " o Trabalho"}?
      </h4>
      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
    </>
  );
};
export default Delete;
