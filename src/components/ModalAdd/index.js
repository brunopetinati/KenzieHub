import { useState } from "react";
import { ButtonStyled } from "../Delete/styles";
import ModalHeader from "../ModalHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import Rating from "../Rating";

const Add = () => {
  const [value, setValue] = useState(1);

  const schema = yup.object().shape({
    title: yup.string().required(),
    status: yup.string().required(),
    rating: yup.string(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSend = (data) => {
    console.log(data);
  };

  return (
    <>
      <ModalHeader>Adicionar novo</ModalHeader>
      <form onSubmit={handleSubmit(handleSend)}>
        <label htmlFor="title">Tecnologia</label>
        <input
          type="text"
          placeholder="Insira a tecnologia"
          name="title"
          id="title"
          ref={register}
        />
        <input
          placeholder=""
          name="status"
          id="status"
          ref={register}
          value={value}
          type="hidden"
        />
        <Rating readOnly value={value} setValue={setValue} />
        <ButtonStyled type="submit">Adicionar</ButtonStyled>
      </form>
    </>
  );
};
export default Add;
