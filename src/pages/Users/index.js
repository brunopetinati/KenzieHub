import { useSelector } from "react-redux";
import backgroundUser from "../../assets/images/users.svg";

// STYLES
import { ContainerPrimay, ContainerSecondary } from "./styles";

const Users = () => {
  const user = useSelector(({ user }) => user);
  const data = useSelector(({ data }) => data);

  const findUser = data.filter((item) =>
    item.name.toLowerCase().includes(user)
  );

  return user.length === 0 ? (
    <ContainerPrimay>
      <img src={backgroundUser} alt="" />
    </ContainerPrimay>
  ) : (
    <ContainerSecondary>
      {findUser.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
    </ContainerSecondary>
  );
};

export default Users;
