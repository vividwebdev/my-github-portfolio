import React from "react";
import NotFoundSVG from "./svgs/NotFound";

const NotFoundError = () => {
  return (
    <div className="grid place-content-center bg-white px-4 pt-10">
      <div className="text-center">
        <NotFoundSVG />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
      </div>
    </div>
  );
};

export default NotFoundError;
