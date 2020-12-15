import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-size: 17.5px;

  ul {
    padding: 0px;
  }
  svg {
    margin-right: 10px;
  }
  li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 945px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (max-width: 455px) {
    padding: 5px;
    font-size: 10px;
  }
`;
