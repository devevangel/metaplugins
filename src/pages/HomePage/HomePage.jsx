import React from "react";

import PluginList from "../../components/PluginList";
import Header from "../../components/Header";

import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Header />
      <PluginList />
    </div>
  );
};

export default HomePage;
