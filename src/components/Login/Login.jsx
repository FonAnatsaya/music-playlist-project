import React from "react";
import logo from "../../assets/music_logo_free.png";
import "./style.css";

const handleButtonClicked = () => {
  const apiUrl = "https://accounts.spotify.com/authorize";
  const redirectUrl = "https://music-playlist-project-anatsaya.vercel.app";
  const clientID = "37aa9bed921840bdb0e696daf4705c38";
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];
  window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
};

export default function Login() {
  return (
    <div className="login">
      <img className="login_img" src={logo} alt="music_logo"></img>
      <button className="login_button" onClick={handleButtonClicked}>
        Connect App
      </button>
    </div>
  );
}
