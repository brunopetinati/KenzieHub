import { useSelector } from "react-redux";
import { MdAddAPhoto } from "react-icons/md";

// HELPERS
import { verifyUser } from "../../helpers";

// COMPONENTS
import Modal from "../Modal";

//STYLE
import { Avatar, Box } from "./style";

const ProfileImage = ({ avatar, verifyUserLogged }) => {
  const authenticated = useSelector(({ authenticated }) => authenticated);

  const verified = verifyUser(authenticated, verifyUserLogged);

  return (
    <Box verified={verified}>
      <Modal type="changePhoto">
        <Avatar src={avatar} />
        {verified && <MdAddAPhoto />}
      </Modal>
    </Box>
  );
};

export default ProfileImage;
