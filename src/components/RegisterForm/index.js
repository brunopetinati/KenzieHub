import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

//COMPONENTS
import Button from "../Button";

//STYLES
import { Container } from "./styles";

const RegisterForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("O formato deve estar em formato de Email")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "São necessários ao menos 6 dígitos")
      .required("Campo obrigatório"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Campo obrigatório"),
    name: yup
      .string()
      .min(4, "São necessários ao menos 4 caractéres")
      .required("Campo obrigatório"),
    bio: yup
      .string()
      .min(8, "Necessário inserir pequena descrição")
      .required("Campo obrigatório"),
    contact: yup
      .string()
      .min(11, "Número de telefone inválido")
      .required("Campo obrigatório"),
    course_module: yup
      .string()
      .min(2, "Necessário inserir módulo atual do curso")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    /* axios
      .post("https://kenziehub.me/users", user)
      .then((res) => console.log(res)); */
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <input placeholder="Nome" name="name" ref={register}></input>
          <span>{errors.name?.message}</span>
        </div>
        <div>
          <input
            placeholder="Módulo do curso"
            name="course_module"
            ref={register}
          ></input>
          <span>{errors.course_module?.message}</span>
        </div>
        <div>
          <input placeholder="Biografia" name="bio" ref={register}></input>
          <span>{errors.bio?.message}</span>
        </div>
        <div>
          <input placeholder="Contato" name="contact" ref={register}></input>
          <span>{errors.contact?.message}</span>
        </div>
        <div>
          <input placeholder="Email" name="email" ref={register}></input>
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <input placeholder="Senha" name="password" ref={register}></input>
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <input
            placeholder="Confirmar senha"
            name="password_confirmation"
            ref={register}
          ></input>
          <div>{errors.password_confirmation?.message}</div>
        </div>
        <Button>Submit</Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
