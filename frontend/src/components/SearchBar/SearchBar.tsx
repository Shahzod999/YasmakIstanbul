import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "./searchBar.scss";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search Notes" value={value} onChange={onChange} />

      {value && <IoMdClose onClick={onClearSearch} />}

      <FaMagnifyingGlass onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
