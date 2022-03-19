import React from "react";

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
      <section className="plugins-container">
        <div className="container">
          <h5 className="plugin-text-header">Plugins</h5>
          <div className="plugin-list">
            <div className="plugin-item">
              <div className="plugin-item-head"></div>
              <div className="plugin-item-foot"></div>
            </div>
            <div className="plugin-item">
              <div className="plugin-item-head"></div>
              <div className="plugin-item-foot"></div>
            </div>
            <div className="plugin-item">
              <div className="plugin-item-head"></div>
              <div className="plugin-item-foot"></div>
            </div>
            <div className="plugin-item">
              <div className="plugin-item-head"></div>
              <div className="plugin-item-foot"></div>
            </div>
            <div className="plugin-item">
              <div className="plugin-item-head"></div>
              <div className="plugin-item-foot"></div>
            </div>
            <div className="plugin-item">
              <div className="plugin-item-head"></div>
              <div className="plugin-item-foot"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
