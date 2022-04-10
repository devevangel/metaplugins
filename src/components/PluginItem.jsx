import React from "react";
// import ReactStars from "react-rating-stars-component";
import TextTruncate from "react-text-truncate";
import { withRouter } from "react-router-dom";

import "../index.css";

// const ratingChanged = (newRating) => {
//   console.log(newRating);
// };

const PluginItem = ({ plugin, history }) => {
  return (
    <div className="group relative bg-transparent border border-gray-200 rounded-lg flex flex-col overflow-hidden">
      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <img
          src={plugin?.image}
          alt="item"
          className="w-full h-full object-center object-cover sm:w-full sm:h-full "
        />
      </div>
      <div className="flex-1 p-4 space-y-2 flex flex-col">
        <h3 className="text-sm font-medium text-white">
          <a href={plugin?.href}>
            <span aria-hidden="true" className="absolute inset-0" />#
            {plugin?.name}
          </a>
        </h3>
        <p className="text-sm text-white">
          <TextTruncate line={4} text={plugin.description} />
        </p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-sm italic text-white">{plugin?.options}</p>
          <p className="text-base font-medium text-white">
            Version: {plugin.version}
          </p>
          <p className="text-base font-medium text-white">
            Author: {plugin?.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PluginItem);
