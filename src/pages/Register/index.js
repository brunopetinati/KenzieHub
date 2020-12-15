//IMAGES
import image from "../../assets/images/register.svg";

//COMPONENTS
import RegisterForm from "../../components/RegisterForm";

//STYLES
import { Container, BoxPrimary, BoxSecondary, Title } from "./styles";

const Register = () => {
  return (
    <>
      <Container>
        <BoxPrimary>
          <img src={image} alt="Register Now!" width="400px" />
        </BoxPrimary>
        <BoxSecondary>
          <Title>Register</Title>
          <RegisterForm />
        </BoxSecondary>
      </Container>
    </>
  );
};

export default Register;
