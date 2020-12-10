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
  #ID{
    width:10%
  }

  #title{
    width: 20%;
  }

  #actions{
    width: 30%;
  }

  td{
    padding:10px;
    text-align: left;
    vertical-align: center
  }

  #buttons{
    border: none;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;

  }
  #edit {
    background-color: #FECA57
  }
  
  #delete {
    background-color: #D63031
  }

  #edit:hover {
    background-color: #FFCA6F
  }
  
  #delete:hover{
    background-color: #EB5656
  }

  #edit:active {
    background-color: #614D21
  }
  
  #delete:active{
    background-color: #890101
  }


  #edit, #delete{
    border: none;
    outline: none;

    width:110px;
    margin: 0 10px 10px 0;

    color: #FFF;
    border-radius: 5px;
    padding: 8px;
    font-weight: 700;
    box-shadow: 5px 5px 5px #0009
  }

  #edit:active, #delete:active{
    box-shadow:0 0 0
  }
`;
