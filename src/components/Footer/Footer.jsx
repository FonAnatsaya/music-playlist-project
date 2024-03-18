import React from "react";
import "./style.css";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";
import Volume from "../Volume/Volume";

export default function Footer() {
  return (
    <div className="footer">
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  );
}
