import styled from "styled-components";

export const ContainerPrimay = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  img {
    height: auto;
    width: 250px;

    @media (max-width: 400px) {
      width: 200px;
    }
  }
`;

export const ContainerSecondary = styled.div`
  padding-top: 55px;
  width: 90%;
  margin: 0 auto;
  height: 100vh;
`;
