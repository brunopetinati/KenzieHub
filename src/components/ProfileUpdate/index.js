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
import { Container, StyledTextField, ButtonClose } from "./style";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string(),
  contact: yup.string(),
  email: yup.string().email(),
  course_module: yup.string(),
  bio: yup.string(),
});

export const ProfileUpdate = ({ setOpen }) => {
  const token = localStorage.getItem("authToken");

  const [snackResponse, setsnackResponse] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const checkData = (data) => {
    const { name, email, bio, contact, course_module } = data;
    if (
      name === "" &&
      email === "" &&
      bio === "" &&
      contact === "" &&
      course_module === ""
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = (data) => {
    axios
      .put("https://kenziehub.me/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        checkData(data)
          ? setsnackResponse({
              open: true,
              severity: "warning",
              message: "No data has been updated",
            })
          : setsnackResponse({
              open: true,
              severity: "success",
              message: "Updated Successfully",
            });
      })
      .catch(() => {
        setsnackResponse({
          open: true,
          severity: "error",
          message: "Update Error!",
        });
      });
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
          label="Name"
          variant="outlined"
          name="name"
          inputRef={register}
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          name="email"
          inputRef={register}
        />
        <StyledTextField
          label="Course Module"
          variant="outlined"
          name="course_module"
          inputRef={register}
        />
        <StyledTextField
          label="Bio"
          variant="outlined"
          name="bio"
          inputRef={register}
        />
        <StyledTextField
          label="Contact"
          variant="outlined"
          name="contact"
          inputRef={register}
        />
        <Button type="submit">Update</Button>
      </Container>
      {open && (
        <Snackbar open={open} message={message} severityValue={severity} />
      )}
    </>
  );
};

export default ProfileUpdate;
