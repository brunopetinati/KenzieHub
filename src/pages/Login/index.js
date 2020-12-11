import image from "../../assets/images/login.svg";
import { Container } from "../Register/styles";
import { BoxPrimary, BoxSecondary, Title } from "./styles";
import LoginComponent from "../../components/LoginForm";

const Login = () => {
  return (
    <>
      <Container>
        <BoxPrimary>
          <img src={image} alt="Log yourself in!" width="400px" />
        </BoxPrimary>
        <BoxSecondary>
          <Title>Login</Title>
          <LoginComponent />
        </BoxSecondary>
      </Container>
    </>
  );
};

export default Login;
