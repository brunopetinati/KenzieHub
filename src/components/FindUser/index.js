import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const FindUser = ({ user }) => {
  const data = useSelector(({ data }) => data);
  const history = useHistory();

  const findUser = data.filter((item) =>
    item.name.toLowerCase().includes(user)
  );

  return (
    <ul>
      {findUser.map((item, index) => (
        <li key={index}>
          <span>{item.name}</span>
          <button onClick={() => history.push(`/users/profile/${item.id}`)}>
            See More
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FindUser;
