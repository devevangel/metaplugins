import React, { useState, useEffect } from "react";
import axios from "axios";

import PluginItem from "./PluginItem";

import "../index.css";

const PluginList = () => {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    axios
      .get("https://pacific-depths-54362.herokuapp.com/api/v1/plugins", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        const plugins = response.data.data.plugins;
        setPlugins(plugins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="plugin-list">
      {plugins.map((plugin) => (
        <PluginItem key={plugin._id} plugin={plugin} />
      ))}
    </div>
  );
};

export default PluginList;
