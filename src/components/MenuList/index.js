import { Link } from "react-router-dom";

const MenuList = ({ isAuthenticated }) =>
  isAuthenticated ? (
    <ul>
      <li>
        <Link to="/">Logout</Link>
      </li>
      <li>
        <Link to="/users">Conheça nossos Devs</Link>
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
        <Link to="/users">Conheça nossos Devs</Link>
      </li>
    </ul>
  );

export default MenuList;
