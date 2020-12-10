import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -50px;
    height: 300%;
    width: 70%;
    background-color: #4469e0;
    z-index: -1;

    transform: rotate(26deg);
    transform-origin: 100% 0;
  }
`;

export const BoxPrimary = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
`;

export const BoxSecondary = styled(BoxPrimary)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
