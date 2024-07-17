import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search Notes" value={value} onChange={onChange} />

      {value && <IoMdClose onClick={onClearSearch} />}

      <FaMagnifyingGlass onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
