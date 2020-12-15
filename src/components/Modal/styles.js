import styled from "styled-components";

import Modal from "@material-ui/core/Modal";

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 50vw;
  max-width: 500px;
  /* padding: 15px; */
  border-radius: 8px;

  background-color: #fff;
  /* box-shadow: 5px 5px 5px #0009; */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  border: "2px solid #000";
  outline: none;
`;
