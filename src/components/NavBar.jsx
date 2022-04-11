import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../assets/img/_LOGO.png";

import "../index.css";

const NavBar = ({ history }) => {
  const handleRouting = (type) => {
    if (type === "home") history.push("/");

    if (type === "admin") history.push("/admin");
  };

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <div
          className="link logo"
          onClick={() => {
            handleRouting("home");
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links-container">
          <li
            className="link"
            onClick={() => {
              handleRouting("admin");
            }}
          >
            Admin
          </li>
          <li
            className="link"
            onClick={() => {
              handleRouting("admin");
            }}
          >
            Upload Plugin
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
