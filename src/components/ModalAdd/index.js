import { useState } from "react";
import { ButtonStyled } from "./styles";
import ModalHeader from "../ModalHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Rating from "../Rating";
import { ErrorSharp } from "@material-ui/icons";

const Add = ({ page }) => {
  const [value, setValue] = useState(1);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
    rating: yup.string(),
    description: yup.string().required("Campo obrigatório"),
    url: yup.string().url().required("Campo obrigatório"),
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
      const statusType =
        data.status <= 1
          ? "Iniciante"
          : data.status <= 2
          ? "Intermediário"
          : "Avançado";

      return page === "techs"
        ? { title: data.title, status: statusType }
        : data;
    };

    const addInfo = infoDecide(data);

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
      <ModalHeader>Adicionar novo</ModalHeader>
      <form onSubmit={handleSubmit(teste)}>
        <label htmlFor="title">Tecnologia</label>
        <input
          type="text"
          placeholder="Insira a tecnologia"
          name="title"
          id="title"
          ref={register}
          error={errors.title}
          helperText={errors.title?.message}
        />
        {page === "techs" ? (
          <>
            <input
              placeholder=""
              name="status"
              id="status"
              ref={register}
              value={value}
              type="hidden"
              error={errors.status}
              helperText={errors.status?.message}
            />
            <Rating readOnly value={value} setValue={setValue} />{" "}
          </>
        ) : (
          <>
            <label htmlFor="description">Descrição</label>
            <textarea
              placeholder="Insira sua descrição"
              name="description"
              id="description"
              ref={register}
              error={errors.description}
              helperText={errors.description?.message}
            />
            <label htmlFor="url">Url Projeto</label>
            <input
              placeholder="Informe a Url do Projeto"
              name="url"
              id="url"
              ref={register}
              error={errors.url}
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
