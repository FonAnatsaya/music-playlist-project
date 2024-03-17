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
        <div className="top__links__logo">
          <img
            className="top__links__logo__img"
            src={logo}
            alt="music_logo"
          ></img>
        </div>
        <ul className="top__links__ul">
          <li className="top__links__li">
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li className="top__links__li">
            <MdSearch />
            <span>Search</span>
          </li>
          <li className="top__links__li">
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </div>
  );
}
