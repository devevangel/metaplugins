import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "../../index.css";
import "./pluginPage.css";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const PluginPage = ({ history }) => {
  const [plugin, setPlugin] = useState({});

  console.log(plugin.plugin);

  useEffect(() => {
    axios
      .get(
        `https://pacific-depths-54362.herokuapp.com/api/v1/plugins/${history.location.state.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        const singlePlugin = response.data.data.plugin;
        setPlugin(singlePlugin);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <span className="plugin-about-header">{plugin.name}</span>
            <br />
            <span className="plugin-author">{plugin.author}</span>
          </span>
          <div className="plugin-header-container">
            <h4>Header</h4>
          </div>
          <div className="plugin-body">
            <div className="plugin-body-image-container">
              <img
                className="plugin-image plugin-body-image"
                src={plugin.image}
                alt="plugin"
              />
            </div>
            <div className="plugin-body-description">
              <span>
                <span>Description</span>
                <br />
                {plugin.description}
              </span>
              <br />
              <span className="plugin-info-container">
                <span>Version: {plugin.version}</span>
                <span>Installations: {plugin?.installations}</span>
                <span>Last Update: {plugin?.lastUpdated}</span>
              </span>
              <br />
              <button
                className="plugin-download-button"
                onClick={() => {
                  axios
                    .get(plugin.plugin, {
                      responseType: "blob",
                    })
                    .then(({ data }) => {
                      const downloadUrl = window.URL.createObjectURL(
                        new Blob([data])
                      );

                      const link = document.createElement("a");

                      link.href = downloadUrl;

                      link.setAttribute("download", "file.zip"); //any other extension

                      document.body.appendChild(link);

                      link.click();

                      link.remove();
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                Download
              </button>
            </div>
          </div>
          <div className="plugin-footer">
            <span className="plugin-rating">
              <ReactStars
                count={5}
                value={plugin.rating}
                onChange={ratingChanged}
                size={20}
                activeColor="#EB5E28"
              />
              ({0}) <span>See reviews</span>
            </span>

            <span>Details</span>

            <span>{plugin.details}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(PluginPage);
