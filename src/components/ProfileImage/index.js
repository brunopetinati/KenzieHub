//STYLE
import { StyledAvatar, Container } from "./style";

const ProfileImage = ({ avatar, name }) => {
  return (
    <Container>
      <StyledAvatar src={avatar} />
      <h1>{name}</h1>
    </Container>
  );
};

export default ProfileImage;
