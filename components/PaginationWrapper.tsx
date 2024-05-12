import React from "react";
import ArrowLeftIcon from "./svgs/ArrowLeft";
import ArrowRightIcon from "./svgs/ArrowRight";

const PaginationWrapper = () => {
  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <ArrowLeftIcon />
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          1
        </a>
      </li>

      <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
        2
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <ArrowRightIcon />
        </a>
      </li>
    </ol>
  );
};

export default PaginationWrapper;
