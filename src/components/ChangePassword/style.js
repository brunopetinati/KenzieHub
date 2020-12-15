import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 10px;
  margin-top: 2vh;

  button {
    background-color: #4469e0;
    border: none;
    color: white;
  }

  button:hover {
    background-color: white;
    border: 1px solid #4469e0;
    color: #4469e0;
  }

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

export const ButtonClose = styled.button`
  background-color: inherit;
  border: none;
  color: white;
`;

export const ErrorMessage = styled.span`
  color: red;
  padding: 10px;
`;
