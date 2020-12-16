import { Link, useHistory } from "react-router-dom";

const MenuList = ({ isAuthenticated }) => {
  const history = useHistory();
  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return isAuthenticated ? (
    <ul>
      <li>
        <button onClick={() => handleLogout()}>Logout</button>
      </li>
      <li>
        <Link to="/users">Find your favorite Dev</Link>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/users">Find your favorite Dev</Link>
      </li>
    </ul>
  );
};
export default MenuList;
