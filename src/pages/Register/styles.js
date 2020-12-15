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
    @media (max-width: 1115px) {
      display: none;
      width: 196px;
      margin-right: 10%;
    }
  }
`;

export const BoxPrimary = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10%;
  margin-left: 5%;
  @media (max-width: 1115px) {
    display: none;
  }
  img {
    @media (min-width: 1919px) {
      width: 600px;
    }
  }
`;

export const BoxSecondary = styled(BoxPrimary)`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-style: italic;
  color: red;
  margin-top: 15%;
  margin-right: 16%;
  @media (max-width: 1115px) {
    width: 150px;
    margin: 0 auto;
    margin-top: 30%;
  }
`;

export const Title = styled.div`
  font-size: 25px;
  color: black;
  font-style: normal;
  margin-bottom: 3%;
  margin-right: 95%;
  @media (max-width: 539px) {
    display: none;
  }
`;
