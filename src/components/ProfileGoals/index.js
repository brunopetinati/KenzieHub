//STYLES
import { StyledButton, Container } from "./style";

const ProfileGoals = ({ buttonName, children }) => {
  return (
    <Container>
      <StyledButton>{buttonName}</StyledButton>
      {children}
    </Container>
  );
};

export default ProfileGoals;
