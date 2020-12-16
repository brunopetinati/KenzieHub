import styled from "styled-components";

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
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 16%;
  @media (max-width: 1115px) {
    width: 160px;
    margin: 0 auto;
    margin-bottom: 20%;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: normal;
  color: black;
  font-style: normal;
  margin-top: 70%;
  margin-bottom: 3%;
  margin-right: 110%;
  @media (max-width: 540px) {
    width: 200px;
    margin-right: 20%;
  }
`;
