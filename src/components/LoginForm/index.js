import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticate } from "../../store/Modules/Authenticated/actions";

//STYLES
import { TextField } from "@material-ui/core";
import { Form, ButtonLogin, Display } from "./styles";

//COMPONENTS
import ButtonSnackBar from "../SnackBar";

const LoginComponent = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .min(6, "Minimum of 6 characteres required")
      .required("Campo obrigatório"),

    password: yup
      .string()
      .min(6, "Minimum of 6 characteres required")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (result) => {
    axios
      .post("https://kenziehub.me/sessions", result)
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.token);
        window.localStorage.setItem(
          "userLogged",
          JSON.stringify(res.data.user)
        );
        dispatch(setAuthenticate(true));
        history.push("/users");
      })
      .catch(dispatch(setAuthenticate(false)));
  };

  const showMessage = () => {
    if (Object.keys(errors).length !== 0) {
      return (
        <ButtonSnackBar
          open={true}
          message="Please enter valid email and password"
          severityValue="error"
        />
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <Display>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          inputRef={register}
          size="small"
        />
      </Display>
      <Display>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          inputRef={register}
          size="small"
          type="password"
        />
      </Display>
      <Display>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </Display>
      {showMessage()}
    </Form>
  );
};

export default LoginComponent;
