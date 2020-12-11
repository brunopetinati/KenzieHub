import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticate } from "../../store/Modules/Authenticated/actions";

//STYLES
import { TextField } from "@material-ui/core";
import { ButtonLogin } from "./styles";

//COMPONENTS

const LoginComponent = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .min(6, "É necessário digitar ao menos 6 dígitos.")
      .required("Campo obrigatório"),

    password: yup
      .string()
      .min(6, "É necessário digitar ao menos 6 dígitos.")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.me/sessions", data)
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.token);
        dispatch(setAuthenticate(true));
        history.push("/users");
      })
      .catch(dispatch(setAuthenticate(false)));
  };

  /*  <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        inputRef={register}
      />
      <span>{errors.email?.message}</span>

      <TextField
        name="password"
        label="Senha"
        variant="outlined"
        inputRef={register}
      />
      <span>{errors.password?.message}</span>
      <br />
      <ButtonLogin type="submit">Entrar</ButtonLogin>
    </form>
  );
};

export default LoginComponent;
