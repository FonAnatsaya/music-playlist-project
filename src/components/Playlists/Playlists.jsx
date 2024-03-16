import React, { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";

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
      console.log(playlists);
    };
    getPlaylists();
  }, [token, dispatch]);
  return <div>Playlists</div>;
}
