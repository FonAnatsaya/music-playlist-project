import axios from "axios";
import React, { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from "../../utils/reducerCases";

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
      const { id, name, description, images, tracks } = response.data;
      const selectedPlaylist = {
        id,
        name,
        description: description.startsWith("<a") ? "" : description,
        image: images[0].url,
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
  }, [token, dispatch]);
  return <div className="body"></div>;
}
