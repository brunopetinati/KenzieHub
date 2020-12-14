//STYLE
import { Image, Container } from "./style";

const ProfileImage = ({ avatar }) => {
  return (
    <Container>
      <Image src={avatar} />
    </Container>
  );
};

export default ProfileImage;
