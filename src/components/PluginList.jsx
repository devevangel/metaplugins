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
    <div className="max-w-2xl mx-auto  px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl mb-3 text-black">Plugins</h2>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {plugins.map((plugin) => (
          <PluginItem key={plugin._id} plugin={plugin} />
        ))}
      </div>
    </div>
  );
};

export default PluginList;
