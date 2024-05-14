import { IRepository } from "@/app/interfaces/github";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export type IRefinedRepository = Partial<IRepository>;
export interface PaginationLinks {
  next?: string;
  last?: string;
}

export const getAllRepos = async (
  itemsPerPage = 10,
  page = 1
): Promise<{
  repos: IRefinedRepository[];
  paginationLinks: PaginationLinks;
}> => {
  try {
    const result = await octokit.request("GET /user/repos", {
      type: "owner",
      per_page: itemsPerPage,
      page: page,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    const repos: IRefinedRepository[] = result.data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      owner: repo.owner,
      language: repo.language,
      created_at: repo.created_at,
    }));

    const paginationLinks: PaginationLinks = parsePaginationLinks(
      result.headers?.link
    );

    return { repos, paginationLinks };
  } catch (error) {
    throw new Error("Failed to fetch repositories");
  }
};

export const getASingleRepository = async (repo: string) => {
  const owner = "ansman58";

  try {
    const result = await octokit.request(`GET /repos/${owner}/${repo}`, {
      owner,
      repo,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    return result.data || undefined;
  } catch (error: any) {
    errorResponse(error);
  }
};

const parsePaginationLinks = (
  linkHeader: string | undefined
): PaginationLinks => {
  const links: PaginationLinks = {};

  if (linkHeader) {
    const linkItems = linkHeader.split(", ");

    linkItems.forEach((item) => {
      const [url, rel] = item.split("; ");
      const link = url.slice(1, -1);
      const key = rel.split("=")[1].slice(1, -1);
      const page = link.split("&page=")[1];

      links[key as keyof PaginationLinks] = page;
    });
  }

  return links;
};

const errorResponse = (error: any) => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    console.log(
      `Error! Status: ${error.response.status}. Message: ${error.response.data.message}`
    );
  } else {
    console.log("Error! Something went wrong:", error);
  }
};
