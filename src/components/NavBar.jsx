import React from "react";
import { withRouter } from "react-router-dom";

import "../index.css";

const NavBar = ({ history }) => {
  const handleRouting = (type) => {
    if (type === "home") history.push("/");

    if (type === "plugin") history.push("/");

    if (type === "admin") history.push("/admin");
  };

  return (
    <nav className="nav-container">
      <div
        className="nav-logo-container"
        onClick={() => {
          handleRouting("home");
        }}
      >
        <span>MetaPlugins</span>
      </div>

      <ul className="nav-links-container">
        <li
          className="link"
          onClick={() => {
            handleRouting("plugin");
          }}
        >
          Plugins
        </li>
        <li
          className="link"
          onClick={() => {
            handleRouting("admin");
          }}
        >
          Admin
        </li>
        <li
          className="upload-btn"
          onClick={() => {
            handleRouting("admin");
          }}
        >
          Upload Plugin
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
