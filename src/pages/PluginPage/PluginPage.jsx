import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const PluginPage = ({ history }) => {
  const [plugin, setPlugin] = useState({});

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
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {plugin?.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <div className="mt-4 space-y-6">
              <div className="text-base text-gray-500">
                {plugin?.description}
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <p className="text-sm text-gray-500">
                Version(beta): {plugin?.version}
              </p>
            </div>
            <div className="mt-6 flex items-center">
              <p className="text-sm text-gray-500">Author: {plugin?.author}</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={plugin?.image}
              alt="plugin img"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <form>
              <div className="sm:flex sm:justify-between">
                <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
              </div>

              <div className="mt-10">
                <button
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.preventDefault();
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
                  Download plugin
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PluginPage);
