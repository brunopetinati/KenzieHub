import styled from "styled-components";
import { Btn } from "../../components/Button/styles";

export const Form = styled.form`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ButtonRegister = styled(Btn)`
  background-color: #4469e0 !important;
  color: white !important;
  height: 8%;
  letter-spacing: 2px !important;
  font-size: 13px !important;
  &:hover {
    background-color: white !important;
    color: #4469e0 !important;
    border: solid 1px #4469e0 !important;
  }
`;
