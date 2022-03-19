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
        <div className="plugin-data-container">
          <span className="plugin-data-header-container">
            <span className="plugin-about-header">
              Slider - Responsive Image Slider for Wordpress
            </span>
            <br />
            <span className="plugin-author">by Soliloquy</span>
          </span>
          <div className="plugin-header-container">
            <h4>Header</h4>
          </div>
          <div className="plugin-body">
            <p>Body goes in here</p>
          </div>
          <div className="plugin-footer">
            <p>footer goes here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PluginPage;
