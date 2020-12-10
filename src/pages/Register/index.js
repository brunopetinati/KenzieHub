import image from "../../assets/images/register.svg";

//COMPONENTS
import RegisterForm from "../../components/RegisterForm";

//STYLES
import { Container, BoxPrimary, BoxSecondary } from "./styles";

const Register = () => {
  return (
    <>
      <Container>
        <BoxPrimary>
          <img src={image} alt="Register Now!" width="400px" />
        </BoxPrimary>
        <BoxSecondary>
          <h1>Register</h1>
          <RegisterForm />
        </BoxSecondary>
      </Container>
    </>
  );
};

export default Register;
