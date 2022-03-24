import React from "react";
import ReactStars from "react-rating-stars-component";
import PlaceHolder from "../assets/img/slider.jpg";

import "../index.css";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const PluginItem = () => {
  return (
    <div className="plugin-item">
      <div className="plugin-item-head">
        <div className="plugin-image-container">
          <img className="plugin-image" src={PlaceHolder} alt="plugin" />
        </div>
        <div className="plugin-about-container">
          <span className="plugin-about-header">
            Slider - Responsive Image Slider for Wordpress
          </span>
          <span className="plugin-about-author">by Soliloquy</span>
        </div>
      </div>
      <div className="plugin-item-foot">
        <span className="plugin-rating">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            value={5}
            activeColor="#EB5E28"
          />
          ({55})
        </span>
        <span>The best WordPress drag & drop slider plugin.</span>
        <span>+60.000 installation</span>
        <span>Version 2.9.3</span>
      </div>
    </div>
  );
};

export default PluginItem;
