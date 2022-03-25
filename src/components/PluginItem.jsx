import React from "react";
import ReactStars from "react-rating-stars-component";
import TextTruncate from "react-text-truncate";
import { withRouter } from "react-router-dom";

import "../index.css";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const PluginItem = ({ plugin, history }) => {
  return (
    <div
      className="plugin-item"
      onClick={() => {
        history.push({
          pathname: `/plugin/${plugin._id}`,
          state: { id: plugin._id },
        });
      }}
    >
      <div className="plugin-item-head">
        <div className="plugin-image-container">
          <img className="plugin-image" src={plugin.image} alt="plugin" />
        </div>
        <div className="plugin-about-container">
          <span className="plugin-about-header">{plugin.name}</span>
          <span className="plugin-about-author">{plugin.author}</span>
        </div>
      </div>
      <div className="plugin-item-foot">
        <span className="plugin-rating">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            value={plugin.rating}
            activeColor="#EB5E28"
          />
          ({55})
        </span>
        <TextTruncate line={3} text={plugin.description} />
        <span>+60.000 installation</span>
        <span>Version {plugin.version}</span>
      </div>
    </div>
  );
};

export default withRouter(PluginItem);
