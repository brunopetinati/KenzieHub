// COMPONENTS
import { useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ModalHeader from "../ModalHeader";
import { useForm } from "react-hook-form";
import Rating from "../Rating";
import TextField from "@material-ui/core/TextField";

// STYLES
import { ButtonStyled, FormContainer } from "./styles";

const Add = ({ page, setOpen }) => {
  const [value, setValue] = useState(1);

  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
    rating: yup.string(),
    description: yup.string(),
    deploy_url: yup.string(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSend = async (data) => {
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc5ODU5MjQsImV4cCI6MTYwODI0NTEyNCwic3ViIjoiMDQ3ZTU3MTgtMDdhZS00NWUwLWEyNTYtMWZhOWEwMTg2OTg1In0.tmWbGocG63S4w0D0Vf-1HapCdwCYS1nN5rb04sGx6Eo";
    // const token = localStorage.getItem("authToken");

    const infoDecide = (data) => {
      let statusType = "default";
      switch (data.status) {
        case "1":
          statusType = "Iniciante";
          break;
        case "2":
          statusType = "Intermediário";
          break;
        case "3":
          statusType = "Avançado";
          break;
        default:
          statusType = "final";
          break;
      }
      return page === "techs"
        ? { title: data.title, status: statusType }
        : data;
    };
    const addInfo = infoDecide(data);
    try {
      await axios.post(`https://kenziehub.me/users/${page}`, addInfo, {
        headers: {
          Authorization: `Bearer: ${key}`,
          "Content-type": "application/json",
        },
      });
      // await window.location.reload();
    } catch (error) {
      console.error(error);
    }
    setOpen(false);
  };

  return (
    <>
      <ModalHeader
        title={`Add ${page === "techs" ? "Tech" : "Work"}`}
        setOpen={setOpen}
      />

      <FormContainer onSubmit={handleSubmit(handleSend)}>
        {page === "techs" ? (
          <>
            <span>
              <TextField
                id="outlined-basic"
                label="Trabalho"
                variant="outlined"
                type="text"
                name="title"
                fullWidth
                inputRef={register}
                error={errors.title}
                helperText={errors.title?.message}
              />
            </span>

            <TextField
              name="status"
              id="status"
              inputRef={register}
              value={value}
              type="hidden"
              error={!!errors.status}
              helperText={errors.status?.message}
            />
            <span>
              <Rating value={value} setValue={setValue} />
            </span>
          </>
        ) : (
          <>
            <span>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                name="title"
                fullWidth
                inputRef={register}
                error={errors.title}
                helperText={errors.title?.message}
              />
            </span>

            <span>
              <TextField
                id="outlined-basic"
                label="The Project Url "
                variant="outlined"
                name="deploy_url"
                fullWidth
                inputRef={register}
                error={!!errors.url}
                helperText={errors.url?.message}
              />
            </span>
            <span>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="description"
                label="Description"
                inputRef={register}
                fullWidth
                rows={4}
                multiline
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </span>
          </>
        )}
        <ButtonStyled type="submit">Add</ButtonStyled>
      </FormContainer>
    </>
  );
};
export default Add;
