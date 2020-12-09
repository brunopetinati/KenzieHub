import styled from "styled-components";

export const Search = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  height: 38px;
  width: auto;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: all 0.3s;
  width: 300px;

  @media (max-width: 500px) {
    transform: unset;
    position: relative;
    left: unset;
    width: 70%;
  }

  input {
    width: 90%;
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }

  svg {
    width: 10%;
  }
`;
