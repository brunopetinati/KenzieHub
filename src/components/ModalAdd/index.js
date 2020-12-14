import { useState } from "react";
import { ButtonStyled } from "./styles";
import ModalHeader from "../ModalHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Rating from "../Rating";
import TextField from "@material-ui/core/TextField";

const Add = ({ page }) => {
  const [value, setValue] = useState(1);

  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
    rating: yup.string(),
    description: yup.string(),
    deploy_url: yup.string(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSend = (data) => {
    console.log(data);

    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc3ODg5MzcsImV4cCI6MTYwODA0ODEzNywic3ViIjoiMDQ3ZTU3MTgtMDdhZS00NWUwLWEyNTYtMWZhOWEwMTg2OTg1In0.OzvYFEvabPb-eyFtFnCZToLcy1ZXJ6BoIdlHGTrUrxE";
    const token = localStorage.getItem("authToken");

    const infoDecide = (data) => {
      let statusType = " default";

      switch (data.status) {
        case "1":
          statusType = "Iniciante";
          break;
        case "2":
          statusType = "Intermediario";
          break;
        case "3":
          statusType = "Avançado";
          break;
        default:
          statusType = "final";
          break;
      }
      return page === "techs"
        ? { title: data.title, status: statusType }
        : data;
    };

    const addInfo = infoDecide(data);

    console.log("dado add Info", addInfo);

    try {
      axios.post(`https://kenziehub.me/users/${page}`, addInfo, {
        headers: {
          Authorization: `Bearer: ${key}`,
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const teste = () => {
    console.log("teste");
  };
  return (
    <>
      <ModalHeader>Adicionar Tecnologia </ModalHeader>
      <form onSubmit={handleSubmit(handleSend)}>
        <label htmlFor="title">Tecnologia</label>
        <TextField
          type="text"
          name="title"
          id="title"
          inputRef={register}
          // error={errors.title}
          // helperText={errors.title?.message}
        />
        {page === "techs" ? (
          <>
            <TextField
              name="status"
              id="status"
              inputRef={register}
              value={value}
              type="hidden"
              error={!!errors.status}
              helperText={errors.status?.message}
            />
            <Rating value={value} setValue={setValue} />{" "}
          </>
        ) : (
          <>
            <label htmlFor="description">Descrição</label>
            <TextField
              name="description"
              id="description"
              inputRef={register}
              multiline
              error={!!errors.description}
              helperText={errors.description?.message}
            />
            <label htmlFor="url">Url Projeto</label>
            <TextField
              name="deploy_url"
              id="url"
              inputRef={register}
              error={!!errors.url}
              helperText={errors.url?.message}
            />
          </>
        )}
        <ButtonStyled type="submit">Adicionar</ButtonStyled>
      </form>
    </>
  );
};
export default Add;
