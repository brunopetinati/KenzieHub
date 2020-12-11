import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  width: 180px;
  border-radius: 20px !important;
  color: #4469e0 !important;
  border: 1px solid #4469e0 !important;

  @media (max-width: 945px) {
    width: 100px;
    height: 30px;
  }
  @media (max-width: 455px) {
    width: 80px;
    height: 25px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 25px;

  @media (max-width: 945px) {
    padding: 10px;
    font-size: 20px;
  }

  @media (max-width: 455px) {
    padding: 5px;
    font-size: 15px;
  }
`;
