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
  height: auto;
  max-width: 500px;
  /* padding: 15px; */
  border-radius: 8px;

  background-color: #fff;
  box-shadow: 5px 5px 5px #0009;

  border: "2px solid #000";
  outline: none;
`;

export const ButtonContainer = styled.div`
  svg {
    color: #4469e0;
    background-color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  button {
    border: none;
    outline: none;

    width: 110px;
    margin: 0 10px 10px 0;

    color: #fff;
    border-radius: 5px;
    padding: 8px;
    font-weight: 700;
    box-shadow: 5px 5px 5px #0009;
  }
  .edit {
    background-color: #feca57;
    :hover {
      background-color: #ffca6f;
    }
    :active {
      background-color: #614d21;
      box-shadow: 0 0 0;
    }
  }

  .delete {
    background-color: #d63031;

    :hover {
      background-color: #eb5656;
    }
    :active {
      background-color: #890101;
      box-shadow: 0 0 0;
    }
  }

  .edit,
  .delete {
    border: none;
    outline: none;

    width: 110px;
    margin: 0 10px 10px 0;

    color: #fff;
    border-radius: 5px;
    padding: 8px;
    font-weight: 700;
    box-shadow: 5px 5px 5px #0009;
  }
`;
