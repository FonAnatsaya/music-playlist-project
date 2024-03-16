import React from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

export default function Layout() {
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
