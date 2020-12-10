import { useSelector } from "react-redux";
import backgroundUser from "../../assets/images/users.svg";

// STYLES
import { NoResult } from "./styles";

const Users = () => {
  const data = useSelector(({ data }) => data);

  return (
    <NoResult>
      <img src={backgroundUser} alt="" />
    </NoResult>
  );
};

export default Users;
