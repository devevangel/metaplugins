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
            <div className="mt-10 w-full max-w-xs">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    className="h-5 w-5 fill-slate-300"
                    viewBox="0 0 20 20"
                  ></svg>
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-600 block bg-white text-black w-full border border-black rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
                  placeholder="Search for plugins..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
