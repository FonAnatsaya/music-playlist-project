import React, { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import "./style.css";
import axios from "axios";
import { reducerCases } from "../../utils/reducerCases";

export default function CurrentTrack() {
  const [{ token, currentPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      if (response.data !== "") {
        const { item } = response.data;
        const currentPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <div className="currentTrack">
      {currentPlaying && (
        <div className="currentTrack__track">
          <div className="currentTrack__track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="currentTrack__track__info">
            <h4 className="currentTrack__track__info__name">
              {currentPlaying.name}
            </h4>
            <h6 className="currentTrack__track__info__artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
}
