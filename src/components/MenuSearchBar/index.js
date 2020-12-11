import { useDispatch } from "react-redux";
import { addUser } from "../../store/Modules/User/actions";

// STYLES
import { Search } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <Search>
      <input
        type="text"
        placeholder="Encontre seu Dev favorito"
        onChange={(e) => dispatch(addUser(e.target.value.toLowerCase()))}
      />
      <AiOutlineSearch />
    </Search>
  );
};

export default SearchBar;
