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
  box-shadow: 5px 5px 5px #0009;

  border: "2px solid #000";
  outline: none;
`;
