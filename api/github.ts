import { IRepository } from "@/app/interfaces/github";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export type IRefinedRepository = Partial<IRepository>;

export const getAllRepos = async (): Promise<IRefinedRepository[]> => {
  try {
    const result = await octokit.request("GET /user/repos", {
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

    return repos;
  } catch (error) {
    throw new Error("Failed to fetch repositories");
  }
};

export const getASingleRepository = async (repo: string) => {
  const owner = "ansman58";
  // const repo = "job-listing-3mtt";
  try {
    const result = await octokit.request(`GET /repos/${owner}/${repo}`, {
      owner,
      repo,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    return result.data || undefined;

    console.log("result", result.data);
  } catch (error: any) {
    errorResponse(error);
  }
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
