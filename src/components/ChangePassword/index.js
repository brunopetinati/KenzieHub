//COMPONENTS
import ModalHeader from "../ModalHeader";
import Button from "../Button";

//HOOKS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//STYLE
import { Container, StyledTextField, ButtonClose, ErrorMessage } from "./style";
import axios from "axios";

const schema = yup.object().shape({
  password: yup.string().min(6, "Min 6 characters!"),
  old_password: yup.string().required("Required!"),
});

export const ChangePassword = ({ setOpen }) => {
  const [error, setError] = useState(false);
  const token = localStorage.getItem("authToken");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .put("https://kenziehub.me/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setOpen(false);
        setError(false);
      })
      .catch(() => setError("Wrong Password!"));
  };

  return (
    <>
      <ModalHeader title="Change Password" setOpen={setOpen} />
      <Container onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          label="Password"
          variant="outlined"
          name="password"
          inputRef={register}
        />
        {errors.password && (
          <ErrorMessage style={{ color: "red" }}>
            {errors.password.message}
          </ErrorMessage>
        )}
        <StyledTextField
          label="Old Password"
          variant="outlined"
          name="old_password"
          inputRef={register}
        />
        {errors.old_password && (
          <ErrorMessage style={{ color: "red" }}>
            {errors.old_password.message}
          </ErrorMessage>
        )}
        {error && <ErrorMessage style={{ color: "red" }}>{error}</ErrorMessage>}
        <Button type="submit">Update</Button>
      </Container>
    </>
  );
};

export default ChangePassword;
