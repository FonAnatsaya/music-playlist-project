import React from "react";
import "./style.css";
import logo from "../../assets/music_logo_free.png";
import Playlists from "../Playlists/Playlists";
import { IoMdAddCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { BsSearchHeart } from "react-icons/bs";

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
            <IoHome />
            <span>Home</span>
          </li>
          <li className="top__links__li">
            <BsSearchHeart />
            <span>Search</span>
          </li>
          <li className="top__links__li">
            <IoMdAddCircle />
            <span>Create a new Playlist</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </div>
  );
}
