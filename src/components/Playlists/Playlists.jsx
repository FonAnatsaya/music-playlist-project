import React, { useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/reducerCases";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylists = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylists();
  }, [token, dispatch]);
  return (
    <div className="playlists">
      <ul className="playlists__ul">
        {playlists.map(({ name, id }) => {
          return (
            <li className="playlists__li" key={id}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
