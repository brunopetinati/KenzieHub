//COMPONENTS
import ProfileImage from "../../components/ProfileImage/index";
import ProfileMenu from "../../components/ProfileMenu/index";

//STYLE
import { Container } from "./style";

const ProfileHeader = ({ data }) => {
  const token = localStorage.getItem("authToken");

  const { name, avatar_url, id } = data;
  return (
    <Container>
      <ProfileImage avatar={avatar_url} name={name} />
      {token && <ProfileMenu id={id} />}
    </Container>
  );
};

export default ProfileHeader;
