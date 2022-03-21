import React from "react";
import ReactStars from "react-rating-stars-component";

import PlaceHolder from "../../assets/img/slider.jpg";

import "../../index.css";
import "./pluginPage.css";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

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
            <div className="plugin-body-image-container">
              <img
                className="plugin-image plugin-body-image"
                src={PlaceHolder}
                alt="plugin"
              />
            </div>
            <div className="plugin-body-description">
              <span>
                <span>Description</span>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                elementum eu nisi vel vehicula. Ut ultricies condimentum metus
                eu luctus.
              </span>
              <br />
              <span className="plugin-info-container">
                <span>Version:</span>
                <span>Installation:</span>
                <span>Last Update:</span>
              </span>
              <br />
              <button className="plugin-download-button">Download</button>
            </div>
          </div>
          <div className="plugin-footer">
            <span className="plugin-rating">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={20}
                activeColor="#EB5E28"
              />
              ({55}) <span>See reviews</span>
            </span>

            <span>Details</span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              elementum eu nisi vel vehicula. Ut ultricies condimentum metus eu
              luctus. Proin lacinia eu erat non malesuada. Aliquam est nulla,
              lacinia quis neque eu, convallis maximus lorem. Donec venenatis
              libero non lectus hendrerit tincidunt. Vestibulum vitae lacinia
              libero, vitae laoreet urna. Vivamus mattis ut velit at accumsan.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PluginPage;
