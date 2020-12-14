//COMPONENTS
import ModalHeader from "../../components/ModalHeader";

//HOOKS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

//STYLE
import { CgClose } from "react-icons/cg";
import { Container, StyledTextField, Button } from "./style";
import axios from "axios";

/* const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  course_module: yup.string(),
  contact: yup.string(),
  bio: yup.string(),
  password: yup.string(),
  old_password: yup.string(),
  avatar_url: yup.mixed().required(),
}); */

const SignupSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
});

const ModalPhotoUpdate = () => {
  const history = useHistory();

  const token = localStorage.getItem("authToken");

  /* const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (data, e) => {
    e.preventDefault();
    console.log(data);
    axios
      .put(`https://kenziehub.me/profile`, data, { headers: { Bearer: token } })
      .then(() => history.push("/users"));
  }; */

  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema,
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <ModalHeader>
        <div>Update Profile</div>
        <div>
          <CgClose />
        </div>
      </ModalHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register} />
        <input type="number" name="age" ref={register} />
        <input type="submit" />
      </form>

      {/* <Container onSubmit={handleSubmit(handleUpdate)}>
        <StyledTextField
          name="name"
          label="Name"
          variant="outlined"
          inputRef={register}
        />
        {errors.message && <span>{errors.message.name}</span>}
        <StyledTextField
          name="email"
          label="Email"
          variant="outlined"
          inputRef={register}
        />
        <StyledTextField
          name="contact"
          label="Contact"
          variant="outlined"
          inputRef={register}
        />
        <StyledTextField
          name="course_module"
          label="Course Module"
          variant="outlined"
          inputRef={register}
        />
        <StyledTextField
          name="bio"
          label="Bio"
          variant="outlined"
          inputRef={register}
        />
        <StyledTextField
          name="password"
          label="Password"
          variant="outlined"
          inputRef={register}
        />
        <StyledTextField
          name="old_password"
          label="Old Password"
          variant="outlined"
          inputRef={register}
        />
        <Button type="submit">Update</Button>
      </Container> */}
    </>
  );
};

export default ModalPhotoUpdate;
