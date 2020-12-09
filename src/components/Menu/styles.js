import styled from "styled-components";

export const Navigation = styled.nav`
  position: relative;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: space-between;
  }

  ul {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li a {
    text-decoration: none;
    margin-right: 10px;
    color: #fff;
  }
`;
