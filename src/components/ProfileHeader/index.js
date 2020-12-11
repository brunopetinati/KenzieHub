//COMPONENTS
import ProfileImage from "../../components/ProfileImage/index";
import ProfileMenu from "../../components/ProfileMenu/index";

//STYLE
import { Container } from "./style";

const ProfileHeader = ({ avatar, name }) => {
  return (
    <Container>
      <ProfileImage avatar={avatar} name={name} />
      <ProfileMenu />
    </Container>
  );
};

export default ProfileHeader;
