import { useSelector } from "react-redux";

// IMAGES
import backgroundUser from "../../assets/images/users.svg";

//COMPONENTS
import FindUser from "../../components/FindUser";

// STYLES
import { ContainerPrimay, ContainerSecondary } from "./styles";

const Users = () => {
  const user = useSelector(({ user }) => user);

  return user.length === 0 ? (
    <ContainerPrimay>
      <img src={backgroundUser} alt="" />
    </ContainerPrimay>
  ) : (
    <ContainerSecondary>
      <FindUser />
    </ContainerSecondary>
  );
};

export default Users;
