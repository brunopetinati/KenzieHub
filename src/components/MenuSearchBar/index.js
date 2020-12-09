// STYLES
import { Search } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <Search>
      <input type="text" placeholder="Encontre seu Dev favorito" />
      <AiOutlineSearch />
    </Search>
  );
};

export default SearchBar;
