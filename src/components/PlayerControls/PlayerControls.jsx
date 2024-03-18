import React from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from "../../utils/StateProvider";
import "./style.css";
import axios from "axios";
import { reducerCases } from "../../utils/reducerCases";

export default function PlayerControls() {
  const [{ token, playerState }, dispatch] = useStateProvider();

  return (
    <div className="playerControls">
      <div className="playerControls__shuffle playerControls__play__button">
        <BsShuffle />
      </div>
      <div className="playerControls__previous playerControls__play__button">
        <CgPlayTrackPrev />
      </div>
      <div className="playerControls__state playerControls__play__button">
        {playerState ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </div>
      <div className="playerControls__next playerControls__play__button">
        <CgPlayTrackNext />
      </div>
      <div className="playerControls__repeat playerControls__play__button">
        <FiRepeat />
      </div>
    </div>
  );
}
