import {
  Container,
  RotateDiv,
  Title,
  HeaderButton1,
  HeaderButton2,
  SeeImage,
} from "./styles";
import image from "../../assets/images/register.svg";
/* import register from "../../assets/images"; */

//COMPONENTS
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <>
      <Container>
        <HeaderButton1>Login </HeaderButton1>
        <HeaderButton2>Conheça nossos Devs</HeaderButton2>
        <RotateDiv>
          <SeeImage src={image} alt="Register Now!" />
        </RotateDiv>

        <Title>Register</Title>
        <RegisterForm />
      </Container>
    </>
  );
};

export default Register;
