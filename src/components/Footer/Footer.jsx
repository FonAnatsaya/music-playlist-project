import React from "react";
import "./style.css";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";

export default function Footer() {
  return (
    <div className="footer">
      <CurrentTrack />
      <PlayerControls />
    </div>
  );
}
