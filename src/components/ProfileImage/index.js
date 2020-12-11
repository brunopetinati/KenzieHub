//STYLE
import { StyledAvatar, Container } from "./style";

const ProfileImage = ({ avatar_url, name }) => {
  return (
    <Container>
      <StyledAvatar src={avatar_url} />
      <h3>{name}</h3>
    </Container>
  );
};

export default ProfileImage;
