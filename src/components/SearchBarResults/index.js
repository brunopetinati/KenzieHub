import { Link } from "react-router-dom";

// STYLES
import { List } from "./styles";

const SearchBarResults = ({ findUser }) => {
  return (
    <List>
      {findUser.map((item, index) => (
        <li key={index}>
          <Link to={`/users/profile/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </List>
  );
};

export default SearchBarResults;
