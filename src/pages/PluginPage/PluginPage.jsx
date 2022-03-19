import React from "react";

import "./pluginPage.css";

const PluginPage = () => {
  return (
    <div>
      <section className="nav-search-section">
        <div className="search-bar-container">
          <input
            className="plugin-search-input"
            type="text"
            placeholder="Search for a plugin"
          />
        </div>
      </section>

      <section className="plugin-section-container">
        <div className="plugin-data-container">Plugin data goes here</div>
      </section>
    </div>
  );
};

export default PluginPage;
