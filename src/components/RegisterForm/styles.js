import styled from "styled-components";
import { Btn } from "../../components/Button/styles";

export const Form = styled.form`
  display: flex;
  height: 100%;
  width: 290px;
  margin-top: 10%;
  margin-left: 40%;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 1600px) {
    margin: 0 auto;
    margin-top: 25%;
    margin-right: 22%;
  }
  @media (max-width: 1115px) {
    margin: 0 auto;
    height: 70%;
    margin-top: 25%;
  }

  @media (max-width: 325px) {
    margin-top: 40%;
    width: 90%;
  }
`;

export const ButtonRegister = styled(Btn)`
  background-color: #4469e0 !important;
  color: white !important;
  height: 200% !important;
  letter-spacing: 2px !important;
  font-size: 13px !important;
  border: solid 2px #4469e0 !important;
  &:hover {
    background-color: #3a5dce !important;
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;
