import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 30px;

  @media (max-width: 945px) {
    font-size: 25px;
  }

  @media (max-width: 455px) {
    font-size: 20px;
  }
`;
