import styled from "styled-components";

export const BoxPrimary = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10%;
  margin-left: 5%;
  @media (max-width: 400px) {
    display: none;
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
  margin-top: 6%;
  margin-right: 16%;
  @media (max-width: 400px) {
    width: 170px;
    margin-left: 15%;
    margin-left: 20%;
  }
`;

export const Title = styled.div`
  font-size: 25px;
  color: black;
  font-style: normal;
  margin-top: 15%;
  margin-right: 110%;
  @media (max-width: 400px) {
    width: 200px;
    margin-right: 10%;
  }
`;
