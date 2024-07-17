import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogOut = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    console.log("nice");
  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="container">
      <div className="navbar">
        <h2>Notes</h2>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        <ProfileInfo onLogOut={onLogOut} />
      </div>
    </div>
  );
};

export default Navbar;
