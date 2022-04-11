import React from "react";

const Header = () => {
  return (
    <section className="search-section">
      <div className="container ">
        <div className="bg-transparent">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
                MetaPlugins.io
              </h2>
              <p className="mt-5 text-xl text-black">
                MetaPlugins is home to the latest Web 3.0 integrated plugins to
                enhance your website and take it into the new age of the
                internet! Developing projects that introduce the WordPress
                community to the world of Web3.0.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
