import styled from "styled-components";
import { TextField } from "@material-ui/core";
import DefaultButton from "../../components/Button";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 10px;
  margin-top: 2vh;
  @media (max-width: 945px) {
    width: 90%;
  }

  @media (max-width: 455px) {
    padding: 5px;
    width: 100%;
  }
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 15px !important;
  input {
    height: 5px;
  }
  @media (max-width: 945px) {
    margin-bottom: 10px !important;
  }

  @media (max-width: 455px) {
    margin-bottom: 5px !important;
  }
`;

export const Button = styled(DefaultButton)`
  background-color: #4469e0 !important;
  color: white !important;
`;
