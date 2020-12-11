//COMPONENTS
import ProfileImage from "../../components/ProfileImage/index";
import ProfileMenu from "../../components/ProfileMenu/index";

//STYLE
import { Container } from "./style";

const ProfileHeader = ({ avatar_url, name }) => {
  return (
    <Container>
      <ProfileImage avatar_url={avatar_url} name={name} />
      <ProfileMenu />
    </Container>
  );
};

export default ProfileHeader;
