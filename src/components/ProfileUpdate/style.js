import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const Btn = styled(Button)`
  color: white !important;
  background-color: #4469e0 !important;
  margin-bottom: 20px !important;

  :hover {
    background-color: #3a5dce !important;
  }
`;

export const Container = styled.form`
  margin-top: 20px;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;

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
