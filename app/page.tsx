import { getAllRepos } from "@/api/github";
import Image from "next/image";
import RepositoryUI from "../components/RepositoryUI";
import RepoUI from "../components/ProfileCard";
import PaginationWrapper from "@/components/PaginationWrapper";

export default async function Home() {
  const repo = await getAllRepos();

  // console.log("repo", repo);

  return (
    <main>
      <h1>Hello World</h1>
      <div>
        <div className="grid grid-cols-fluid256 gap-6">
          {repo?.map((repo, index) => (
            <RepoUI key={index} repository={repo} />
          ))}
        </div>
        <PaginationWrapper />
      </div>
    </main>
  );
}
