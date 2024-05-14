"use client";

import React from "react";
import ArrowLeftIcon from "./svgs/ArrowLeft";
import ArrowRightIcon from "./svgs/ArrowRight";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationLinks {
  next?: string;
  last?: string;
  prev?: string;
  first?: string;
}

interface Props {
  paginationLinks: PaginationLinks;
}

const Pagination: React.FC<Props> = ({ paginationLinks }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const onGoToNextPage = () => {
    if (!paginationLinks) return;

    let currentPage = Number(params.get("page"));
    if (!currentPage || isNaN(Number(currentPage))) {
      currentPage = 1;
      return;
    }

    if (
      currentPage >= Number(paginationLinks.last) ||
      (Number(paginationLinks.prev) && !paginationLinks.next)
    ) {
      currentPage = Number(paginationLinks.last);
      return;
    }

    params.set("page", String(Number(currentPage) + 1));
    replace(`${pathname}?${params}`);
  };

  const onGoToPrevPage = () => {
    if (!paginationLinks) return;

    let currentPage = Number(params.get("page"));

    if (Number(paginationLinks.last) - 1 < 1) {
      currentPage = 1;
      return;
    }

    params.set("page", String(currentPage - 1));
    replace(`${pathname}?${params}`);
  };

  const goToPage = (selectedPage: number) => {
    if (!paginationLinks) return;

    if (selectedPage > Number(paginationLinks.last)) return;
    if (selectedPage < 1) return;

    params.set("page", String(selectedPage));
    replace(`${pathname}?${params}`);
  };

  const noOfPages = (): number => {
    if (!paginationLinks) return 1;

    if (!paginationLinks.next && paginationLinks.prev) {
      return Number(paginationLinks.prev) + 1;
    }

    return Number(paginationLinks.last);
  };

  const isActivePage = (index: number) => {
    const activePage = Number(params.get("page")) || 1;

    return activePage - 1 === index;
  };

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <li>
        <button
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          onClick={onGoToPrevPage}
        >
          <span className="sr-only">Prev Page</span>
          <ArrowLeftIcon />
        </button>
      </li>

      {Array.from({ length: noOfPages() }).map((_, index) => (
        <li key={index}>
          <button
            className={`${
              isActivePage(index) ? "bg-blue-600 text-white" : "bg-white"
            } block size-8 rounded border border-gray-100  text-center leading-8 text-gray-900`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}

      <li>
        <button
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
          onClick={onGoToNextPage}
        >
          <span className="sr-only">Next Page</span>
          <ArrowRightIcon />
        </button>
      </li>
    </ol>
  );
};

export default Pagination;
