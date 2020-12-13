import styled from "styled-components";

export const List = styled.ul`
  width: 300px !important;
  height: auto !important;
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translate(-50%, -11px);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  padding-top: 10px;
  z-index: 0;

  @media (max-width: 500px) {
    transform: none;
    left: 0;
    width: 100% !important;
  }

  li {
    width: 100%;
  }

  li a {
    padding: 10px 16px;
    transition: all 0.15s;
    margin: 0 !important;
    display: block;
    color: #343a40 !important;
    &:hover {
      background-color: #ebebeb;
    }
  }
`;
