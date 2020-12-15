//COMPONENTS
import ModalHeader from "../ModalHeader";
import Button from "../Button";
import Snackbar from "../SnackBar";

//HOOKS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//STYLE
import { CgClose } from "react-icons/cg";
import { Container, StyledTextField, ButtonClose, ErrorMessage } from "./style";
import axios from "axios";

const schema = yup.object().shape({
  password: yup.string().min(6, "Min 6 characters!"),
  old_password: yup.string().required("Required!"),
});

export const ChangePassword = ({ setOpen }) => {
  const [snackResponse, setsnackResponse] = useState({
    open: false,
    severity: "",
    message: "",
  });

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
        setsnackResponse({
          open: true,
          severity: "success",
          message: "Updated Successfully",
        });
      })
      .catch(() =>
        setsnackResponse({
          open: true,
          severity: "error",
          message: "Wrong Password!",
        })
      );
  };

  const { open, severity, message } = snackResponse;

  return (
    <>
      <ModalHeader>
        <div>Update Profile</div>
        <ButtonClose onClick={() => setOpen(false)}>
          <CgClose />
        </ButtonClose>
      </ModalHeader>
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
        <Snackbar open={open} message={message} severityValue={severity} />
        <Button type="submit">Update</Button>
      </Container>
    </>
  );
};

export default ChangePassword;
