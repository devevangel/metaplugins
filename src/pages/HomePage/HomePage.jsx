import React from "react";

import PluginList from "../../components/PluginList";

import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <section className="search-section">
        <div className="container">
          <h4 className="search-header-text">Search For Plugins</h4>
          <input
            className="plugin-search"
            type="text"
            placeholder="Enter a plugin name"
          />
        </div>
      </section>
      <PluginList />
    </div>
  );
};

export default HomePage;
