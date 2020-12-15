import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const Btn = styled(Button)`
  color: white !important;
  background-color: #4469e0 !important;

  :hover {
    background-color: #3a5dce !important;
  }
`;

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
    input {
      height: 4px;
    }
  }

  @media (max-width: 455px) {
    margin-bottom: 5px !important;
    input {
      height: 3px;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  padding: 10px;
`;
