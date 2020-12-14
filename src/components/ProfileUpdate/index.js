//COMPONENTS
import ModalHeader from "../ModalHeader";
import Button from "../Button";

//HOOKS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//STYLE
import { CgClose } from "react-icons/cg";
import { Container, StyledTextField, ButtonClose } from "./style";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  course_module: yup.string(),
  contact: yup.string(),
  bio: yup.string(),
  password: yup.string(),
  old_password: yup.string(),
});

export const ProfileUpdate = ({ setOpen }) => {
  const token = localStorage.getItem("authToken");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .put("https://kenziehub.me/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setOpen(false))
      .catch((err) => console.log(err));
  };

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
          label="Password"
          variant="outlined"
          name="password"
          inputRef={register}
        />
        <StyledTextField
          label="Old Password"
          variant="outlined"
          name="old_password"
          inputRef={register}
        />
        <Button type="submit">Update</Button>
      </Container>
    </>
  );
};

export default ProfileUpdate;
