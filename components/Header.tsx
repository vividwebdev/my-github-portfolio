"use client";

import React from "react";
import GoToArrowIcon from "./svgs/GoToArrow";

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back! 👋
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Checkout my GitHub API Project 🚀
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
              onClick={() =>
                window.open("https://github.com/ansman58", "__blank")
              }
            >
              <span className="text-sm font-medium"> View GitHub Proile </span>

              <GoToArrowIcon />
            </button>

            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Create Repo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
