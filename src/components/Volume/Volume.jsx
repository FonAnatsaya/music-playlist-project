import axios from "axios";
import React from "react";
import "./style.css";
import { useStateProvider } from "../../utils/StateProvider";

export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (evt) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(evt.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };
  return (
    <div className="volume">
      <input
        className="volume__input"
        type="range"
        onMouseUp={(evt) => setVolume(evt)}
        min={0}
        max={100}
      />
    </div>
  );
}
