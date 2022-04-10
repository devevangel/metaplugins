import React from "react";

const Header = () => {
  return (
    <section className="search-section">
      <div className="container ">
        <div className="bg-transparent">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                MetaPlugins.io
              </h2>
              <p className="mt-5 text-xl text-gray-400">
                The web3.0 wordpress plugin MarketPlace.
              </p>
            </div>
            <div className="mt-10 w-full max-w-xs">
              <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input
                  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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
