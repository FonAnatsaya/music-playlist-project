import React from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../../utils/StateProvider";

export default function Navbar() {
  const [{ userProfile }] = useStateProvider();
  return (
    <div className="navbar">
      <div className="search__bar">
        <FaSearch />
        <input
          className="search__bar__input"
          type="text"
          placeholder="Artists, songs, or podcasts "
        ></input>
      </div>
      <div className="avatar">
        <a className="avatar__a" href="#">
          <CgProfile />
          <span>{userProfile?.user_Name}</span>
        </a>
      </div>
    </div>
  );
}
