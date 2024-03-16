import React from "react";
import logo from "../../assets/music_logo_free.png";
import "./style.css";

export default function Login() {
  return (
    <div className="login">
      <img src={logo} alt=""></img>
      <button>Connect App</button>
    </div>
  );
}
