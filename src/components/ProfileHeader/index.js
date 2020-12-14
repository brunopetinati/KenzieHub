//COMPONENTS
import ProfileImage from "../../components/ProfileImage/index";
import ProfileMenu from "../../components/ProfileMenu/index";

//STYLE
import { Container, Box } from "./style";

const ProfileHeader = ({ data }) => {
  const token = localStorage.getItem("authToken");
  const userLogged = localStorage.getItem("userLogged");

  console.log(userLogged);

  const { name, avatar_url, id } = data;
  return (
    <Container>
      <Box>
        <ProfileImage avatar={avatar_url} />
        <h1>{name}</h1>
      </Box>
      {token && <ProfileMenu id={id} />}
    </Container>
  );
};

export default ProfileHeader;
