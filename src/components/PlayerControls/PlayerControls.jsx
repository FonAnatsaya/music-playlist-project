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
import { IconContext } from "react-icons";

export default function PlayerControls() {
  const [{ token, playerState, shuffleState, deviceID }, dispatch] =
    useStateProvider();
  const changeTrack = async (trackType) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${trackType}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data !== "") {
      const { item } = response.data;
      const currentPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist) => artist.name),
        image: item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
    }
  };
  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  const shuffleTrack = async () => {
    let state = !shuffleState;
    await axios.put(
      `https://api.spotify.com/v1/me/player/shuffle?state=${state}&device_id=${deviceID}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: reducerCases.SET_SHUFFLE_STATE,
      shuffleState: !shuffleState,
    });
  };
  return (
    <div className="playerControls">
      <div className="playerControls__shuffle playerControls__play__button">
        <IconContext.Provider
          value={{
            className: shuffleState ? "shuffle__color_change active" : "",
          }}
        >
          <BsShuffle onClick={shuffleTrack} />
        </IconContext.Provider>
      </div>
      <div className="playerControls__previous playerControls__play__button">
        <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
      </div>
      <div className="playerControls__state playerControls__play__button">
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className="playerControls__next playerControls__play__button">
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className="playerControls__repeat playerControls__play__button">
        <FiRepeat />
      </div>
    </div>
  );
}
