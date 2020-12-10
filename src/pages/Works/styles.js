import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  width: 100vw;
  max-width: 100%;

border: 1px solid black;
  background-color: #0009;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  div {
    width: 80vw;
  
    background-color: #0009;
  }
`;
