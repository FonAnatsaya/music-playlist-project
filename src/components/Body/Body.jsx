import axios from "axios";
import React, { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from "../../utils/reducerCases";
import "./style.css";
import logo from "../../assets/music_logo_free.png";

export default function Body() {
  const [{ token, selectedPlaylistID, selectedPlaylist }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistID}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const { id, name, description, images, tracks } = response.data;
      const selectedPlaylist = {
        id,
        name,
        description: description.startsWith("<a") ? "" : description,
        image: images ? images[0].url : logo,
        tracks: tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistID]);

  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="body">
      {console.log(selectedPlaylist)}
      {selectedPlaylist && (
        <>
          <div className="body__playlist">
            <div className="body__playlist__image">
              <img src={selectedPlaylist.image} alt="selectedplaylist" />
            </div>
            <div className="body__playlist__details">
              <span className="body__playlist__details__type">PLAYLIST</span>
              <h1 className="body__playlist__details__title">
                {selectedPlaylist.name}
              </h1>
              <p className="body__playlist__details__description">
                {selectedPlaylist.description}
              </p>
            </div>
          </div>
          <div className="body__list">
            <div className="body__list__header__row">
              <div className="body__list__header__row__col">
                <span>#</span>
              </div>
              <div className="body__list__header__row__col">
                <span>Title</span>
              </div>
              <div className="body__list__header__row__col">
                <span>Album</span>
              </div>
              <div className="body__list__header__row__col">
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </div>
          </div>
          <div className="tracks">
            {selectedPlaylist.tracks.map(
              (
                {
                  id,
                  name,
                  artists,
                  image,
                  duration,
                  album,
                  context_uri,
                  track_number,
                },
                index
              ) => {
                return (
                  <div className="track__row" key={id}>
                    <div className="track__col">
                      <span>{index + 1}</span>
                    </div>
                    <div className="track__col track__detail">
                      <div className="track__detail__image">
                        <img src={image} alt="track" />
                      </div>
                      <div className="track__detail__info">
                        <span className="track__detail__info__name">
                          {name}
                        </span>
                        <span className="track__detail__info__artist">
                          {artists}
                        </span>
                      </div>
                    </div>
                    <div className="track__col">
                      <span>{album}</span>
                    </div>
                    <div className="track__col">
                      <span>{msToMinutesAndSeconds(duration)}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
}
