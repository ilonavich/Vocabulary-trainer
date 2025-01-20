import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
          <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              Copyright &copy; 2022. All rights reserved.
            </p>
            <Socials />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
