//COMPONENTS
import ProfileImage from "../../components/ProfileImage/index";
import ProfileMenu from "../../components/ProfileMenu/index";

//STYLE
import { Container, Box } from "./style";

const ProfileHeader = ({ data }) => {
  const { name, avatar_url, id } = data;

  const userLogged = JSON.parse(localStorage.getItem("userLogged"));

  return (
    <Container>
      <Box>
        <ProfileImage avatar={avatar_url} />
        <h1>{name}</h1>
      </Box>
      {userLogged.id === id && <ProfileMenu id={id} />}
    </Container>
  );
};

export default ProfileHeader;
