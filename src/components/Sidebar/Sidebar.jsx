import React from "react";
import "./style.css";
import logo from "../../assets/music_logo_free.png";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "../Playlists/Playlists";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top__links">
        <div className="logo">
          <img src={logo} alt="music_logo"></img>
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </div>
  );
}
