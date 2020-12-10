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

export const HeaderButton1 = styled.button`
  background: #fff0;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 1060px;
  outline: none;
  top: 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border-bottom: solid black 2px;
`;
export const HeaderButton2 = styled.button`
  background: #fff0;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 1120px;
  outline: none;
  top: 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border-bottom: solid black 2px;
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
`;

/* export const FormFlex = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
 */

export const SmallMargin = styled.div`
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 190px;
  height: 25px;
  margin: 0 auto;
  background: #1172d7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top 50px;
  color: white;
  padding: 10px;
  cursor:pointer;
  transition: 0.8s;
  border-radius: 3px;
  font-size 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: bold;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  :hover {
    background-color:#F3F7F7;
    color:#1172d7;
  }
`;

export const SeeImage = styled.div`
  position: absolute;
  left: 1060px;
  top: 700px;
`;
