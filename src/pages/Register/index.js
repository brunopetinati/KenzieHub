import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {
  Container,
  RotateDiv,
  Title,
  HeaderButton1,
  HeaderButton2,
  Form,
  Button,
  SmallMargin,
  SeeImage,
} from "./styles";
/* import register from "../../assets/images"; */

const Register = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("O formato deve estar em formato de Email")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "É necessário ao menos 6 dígitos")
      .required("Campo obrigatório"),
    /* password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem")
    .required("Campo obrigatório"), */
    name: yup
      .string()
      .min(4, "É necessário ao menos 4 caractéres")
      .required("Campo obrigatório"),
    bio: yup
      .string()
      .min(8, "Necessário pequena descrição")
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

  const handleForm = (user) => {
    console.log(user);
    /* axios
      .post("https://kenziehub.me/users", user)
      .then((res) => console.log(res)); */
  };

  return (
    <Container>
      {/* <SeeImage>
        <img src="../../assets/images/register.svg" alt="Register Now!" />
      </SeeImage> */}

      <RotateDiv></RotateDiv>
      <HeaderButton1>Login </HeaderButton1>
      <HeaderButton2>Conheça nossos Devs</HeaderButton2>
      <Title>Register</Title>
      <Form>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <input placeholder="Email" name="email" ref={register}></input>
            <SmallMargin>{errors.email?.message}</SmallMargin>
          </div>
          <br />
          <div>
            <input placeholder="Senha" name="password" ref={register}></input>
            <SmallMargin>{errors.password?.message}</SmallMargin>
          </div>
          <br />
          <div>
            <input placeholder="Nome" name="name" ref={register}></input>
            <SmallMargin>{errors.name?.message}</SmallMargin>
          </div>
          <br />
          <div>
            <input placeholder="Biografia" name="bio" ref={register}></input>
            <SmallMargin>{errors.bio?.message}</SmallMargin>
          </div>
          <br />
          <div>
            <input placeholder="Contato" name="contact" ref={register}></input>
            <SmallMargin>{errors.contact?.message}</SmallMargin>
          </div>
          <br />
          <div>
            <input
              placeholder="Módulo do curso"
              name="course_module"
              ref={register}
            ></input>
            <SmallMargin>{errors.course_module?.message}</SmallMargin>
          </div>
          {/*  <div>
        <input
          placeholder="Confirmar senha"
          name="password_confirmation"
          ref={register}
        ></input>
        <div>{errors.password_confirmation?.message}</div>
        <p></p>
      </div> */}
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </Container>
  );
};

export default Register;
