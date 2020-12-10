import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const RotateDiv = styled.div`
  position: absolute;
  background: #1172d7;
  height: 1100px;
  width: 1900px;
  top: -460px;
  left: -1170px;
  transform: rotate(25deg);
`;

export const HeaderButton1 = styled.div`
  background: #fff0;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 1060px;
  outline: none;
  top: 0px;
  font-size: 15px;
  border-bottom: solid black 2px;
  padding: 1px 0px;
  margin: 1px 6px;
  :hover {
    padding: 1px 6px;
    margin: 1px 0px;
    border-bottom: solid black 2px;
    transition: 0.4s;
  }
`;
export const HeaderButton2 = styled.button`
  background: #fff0;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 1120px;
  outline: none;
  top: 0px;
  font-size: 15px;
  border-bottom: solid black 2px;
  padding: 1px 0px;
  margin: 1px 6px;
  :hover {
    padding: 1px 6px;
    margin: 1px 0px;
    border-bottom: solid black 2px;
    transition: 0.4s;
  }
`;

export const Title = styled.div`
  position: absolute;
  left: 880px;
  top: 150px;
  text-align: center;
  color: #383d3d;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 0px;
`;

export const Form = styled.div`
  position: absolute;
  background: white;
  width: 300px;
  height: 450px;
  left: 820px;
  top: 230px;
  text-align: center;
  color: red;
  font-size: 12px;
  font-style: italic;
  input {
    margin: 3px;
    padding: 2px;
  }
`;

export const SmallMargin = styled.div`
  margin-top: 1px;
  margin-bottom: 1px;
`;

export const SeeImage = styled.img`
  position: absolute;
  right: 130px;
  top: 350px;
  width: 450px;
  transform: rotate(-25deg);
`;
