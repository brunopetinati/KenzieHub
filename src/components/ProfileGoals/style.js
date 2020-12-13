import styled from "styled-components";

export const Title = styled.h2`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  text-align: center;
  width: 200px;
  height: 30px;
  border-radius: 30px;
  color: #4469e0;
  border: 1px solid #4469e0;
  font-size: 30px;

  @media (max-width: 945px) {
    width: 130px;
    height: 30px;
    font-size: 25px;
    padding: 20px;
  }
  @media (max-width: 455px) {
    width: 100px;
    height: 25px;
    font-size: 20px;
    padding: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 25px;
  ul {
    padding: 0px;
    margin-top: 10px;
  }

  @media (max-width: 945px) {
    padding: 10px;
    font-size: 20px;
  }

  @media (max-width: 455px) {
    padding: 5px;
    font-size: 15px;
  }
`;
