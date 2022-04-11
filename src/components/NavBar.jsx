import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../assets/img/_LOGO.png";

import "../index.css";

const NavBar = ({ history }) => {
  const handleRouting = (type) => {
    if (type === "home") history.push("/");

    if (type === "admin") history.push("/admin");

    if (type === "contact") history.push("/contact");

    if (type === "about") history.push("/about");
  };

  return (
    <nav className="max-w-2xl mx-auto sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
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
          <li
            className="link"
            onClick={() => {
              handleRouting("contact");
            }}
          >
            Contact Us
          </li>
          <li
            className="link"
            onClick={() => {
              handleRouting("about");
            }}
          >
            About Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
