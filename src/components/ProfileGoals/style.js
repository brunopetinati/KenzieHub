import styled from "styled-components";

export const Title = styled.h2`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  text-align: center;
  width: 200px;
  height: 30px;
  border-radius: 30px;
  color: #4469e0;
  border: 1px solid #4469e0;
  font-size: 22.5px;

  @media (max-width: 945px) {
    width: 130px;
    height: 30px;
    font-size: 18.5px;
    padding: 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 455px) {
    width: 100px;
    height: 25px;
    font-size: 15px;
    padding: 15px;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  h3 {
    margin-bottom: 5px;
    margin-top: 0px;
    font-weight: 500;
    font-size: 1.1rem;
  }
  ul {
    padding-left: 60px;
    margin: 0;
  }

  p {
    margin-top: 5px;
    font-size: 15px;
  }

  @media (max-width: 945px) {
    padding: 10px;
    ul {
      padding-left: 40px;
    }
  }

  @media (max-width: 455px) {
    padding: 5px;
    font-size: 15px;
    p {
      font-size: 10px;
    }
    h3 {
      font-size: 0.8rem;
    }
  }
`;
