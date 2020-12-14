import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

//STYLES
import { Form, ButtonRegister, Display } from "./styles";
import { TextField } from "@material-ui/core";

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
    axios
      .post("https://kenziehub.me/users", data)
      .then((res) => console.log(res));
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <Display>
        <TextField
          label="Nome"
          name="name"
          inputRef={register}
          variant="outlined"
          size="small"
        />
        <span>{errors.name?.message}</span>
      </Display>
      <Display>
        <TextField
          label="Módulo do curso"
          name="course_module"
          inputRef={register}
          variant="outlined"
          size="small"
        />
        <span>{errors.course_module?.message}</span>
      </Display>
      <Display>
        <TextField
          label="Biografia"
          name="bio"
          inputRef={register}
          variant="outlined"
          size="small"
        />
        <span>{errors.bio?.message}</span>
      </Display>
      <Display>
        <TextField
          label="Contato"
          name="contact"
          inputRef={register}
          variant="outlined"
          size="small"
        />
        <span>{errors.contact?.message}</span>
      </Display>
      <Display>
        <TextField
          label="Email"
          name="email"
          inputRef={register}
          variant="outlined"
          size="small"
        />
        <span>{errors.email?.message}</span>
      </Display>
      <Display>
        <TextField
          label="Senha"
          name="password"
          inputRef={register}
          variant="outlined"
          size="small"
        />
        <span>{errors.password?.message}</span>
      </Display>
      <Display>
        <TextField
          label="Confirmar senha"
          name="password_confirmation"
          inputRef={register}
          variant="outlined"
          size="small"
        />
        {errors.password_confirmation?.message}
      </Display>
      <Display>
        <ButtonRegister type="submit">submit</ButtonRegister>
      </Display>
    </Form>
  );
};

export default RegisterForm;
