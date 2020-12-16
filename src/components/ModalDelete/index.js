// COMPONENTS
import ModalHeader from "../ModalHeader";
import axios from "axios";

// STYLES
import { ButtonStyled } from "./styles";

const Delete = ({ page, id, setOpen }) => {
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
