import React, { useEffect } from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../../utils/reducerCases";

export default function Layout() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const { id, display_name } = response.data;
      const userProfile = {
        user_ID: id,
        user_Name: display_name,
      };
      dispatch({ type: reducerCases.SET_USERPROFILE, userProfile });
    };
    getUserProfile();

    const getDevice_ID = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/devices",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const deviceID = response.data.devices[0].id;
      dispatch({ type: reducerCases.SET_DEVICE_ID, deviceID });
    };
    getDevice_ID();
  }, [token, dispatch]);
  return (
    <div className="layout">
      <div className="layout__body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body__content">
            <Body />
          </div>
        </div>
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}
