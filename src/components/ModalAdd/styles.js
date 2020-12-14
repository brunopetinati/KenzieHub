import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin-bottom: 15px;
  margin-top: 15px;
  border: none;
  outline: none;
  padding: 8px;
  background-color: #4469e0;
  color: #fff;
  border-radius: 5px;
  width: 50%;
  font-size: 15px;
  letter-spacing: 2px;
  box-shadow: 5px 5px 5px #0009;
  :active {
    box-shadow: 0 0 0;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    margin-bottom: 15px;
    width: 80%;
  }
`;
