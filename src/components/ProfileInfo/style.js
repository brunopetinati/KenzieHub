import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-size: 25px;

  ul {
    padding: 0px;
  }
  svg {
    margin-right: 15px;
    vertical-align: bottom;
  }
  li {
    padding-bottom: 15px;
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
