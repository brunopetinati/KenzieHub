import styled from "styled-components";

export const TableContainer = styled.table`
  width: 80vw;
  border: 1px solid #999;
  border-collapse: collapse;
  th,
  tr,
  td {
    border: 1px solid #999;
  }
  #ID {
    width: 10%;
  }

  #title {
    width: 20%;
  }

  #actions {
    width: 30%;
  }

  td {
    padding: 10px;
    text-align: left;
    vertical-align: center;
  }

  .buttons {
    border: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
  }
`;
