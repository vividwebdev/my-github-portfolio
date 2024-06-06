import React from "react";

const ErrorBoundary = () => {
  return (
    <div className="grid place-content-center bg-white px-4 pt-10">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">400</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We are sorry! Something went wrong</p>

        <a
          href="/"
          className="mt-6 inline-block rounded bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorBoundary;
