import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

//COMPONENTS
import ModalHeader from "../ModalHeader";
import ButtonSnackbar from "../SnackBar";

// STYLES
import { FiSend } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import { Form } from "./styles";

const ModalChangePhoto = ({ setOpen }) => {
  const schema = yup.object().shape({
    avatar: yup
      .mixed()
      .required()
      .test(
        "fileSize",
        "Image not found, insert your image and try again",
        (value) => (value.length === 0 ? false : true)
      ),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const newData = new FormData();
    newData.append("avatar", data.avatar[0]);

    const token = localStorage.getItem("authToken");

    axios
      .patch("https://kenziehub.me/users/avatar", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("deu bom", response.data);
      })
      .catch((e) => console.error("deu ruim", e));
  };

  const showMessage = () => {
    return (
      errors.avatar && (
        <ButtonSnackbar
          open={true}
          message={errors.avatar.message}
          severityValue={"error"}
        />
      )
    );
  };

  return (
    <>
      <ModalHeader title="Profile Image" setOpen={setOpen} />
      <Form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="upload-photo">
          <input id="upload-photo" name="avatar" type="file" ref={register} />

          <Button component="span">choose your image</Button>
        </label>
        <Button type="submit">
          <FiSend />
        </Button>
        {showMessage()}
      </Form>
    </>
  );
};

export default ModalChangePhoto;
