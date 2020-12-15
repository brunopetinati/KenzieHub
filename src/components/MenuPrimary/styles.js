import styled from "styled-components";
import { Container, Navigation } from "../MenuSecondary/styles";

export const ContainerPrimary = styled(Container)`
  background-color: transparent;
  box-shadow: none;
  position: fixed;
`;

export const Navigate = styled(Navigation)`
  ul {
    width: 100%;
    justify-content: flex-end;
  }
  li a {
    position: relative;
    color: black;
    &:hover {
      &:after {
        width: 80%;
      }
    }
    &:after {
      position: absolute;
      bottom: -8px;
      content: "";
      height: 2px;
      width: 30%;
      background-color: #707070;
      left: 50%;
      transform: translate(-50%);
      transition: all 0.3s;
    }
  }
`;
