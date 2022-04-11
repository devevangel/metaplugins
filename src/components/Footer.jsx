import React from "react";
import { withRouter } from "react-router-dom";

const Footer = ({ history }) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mt-24 mb-0 mx-auto py-0 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <span className="text-black hover:text-gray-500">
            <span className="">
              &copy; 2022 All rights reserved – BlackWorks
            </span>
          </span>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-black">
            Made by BlackWorks.io
          </p>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
