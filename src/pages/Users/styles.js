import styled from "styled-components";

export const NoResult = styled.div`
  height: 92vh;
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
