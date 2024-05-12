import React from "react";
import { IRepository } from "../app/interfaces/github";
import { IRefinedRepository } from "@/api/github";

interface Props {
  repository: IRefinedRepository;
}

const RepositoryUI: React.FC<Props> = ({ repository }) => {
  return (
    <article className="border rounded-md shadow-md p-6 mb-4 bg-white">
      <header>
        <h2 className="text-xl font-semibold mb-2 text-red-800">
          {repository?.name}
        </h2>
        <p className="text-gray-600 mb-4">
          {repository?.description || "No Description"}
        </p>
      </header>
      <section className="flex justify-between">
        {/* <div>
          <p className="text-gray-700">Stars: {repository?.stargazers_count}</p>
          <p className="text-gray-700">Forks: {repository?.forks_count}</p>
          <p className="text-gray-700">
            Open Issues: {repository?.open_issues_count}
          </p>
        </div> */}
      </section>
    </article>
  );
};

export default RepositoryUI;
