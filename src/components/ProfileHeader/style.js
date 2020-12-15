import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 30px;
  h1 {
    display: flex;
  }

  @media (max-width: 945px) {
    font-size: 25px;
  }

  @media (max-width: 455px) {
    font-size: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  font-size: 20px;

  @media (max-width: 945px) {
    font-size: 15px;
  }
  @media (max-width: 455px) {
    font-size: 9.5px;
  } ;
`;
