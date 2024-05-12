import { getAllRepos } from "@/api/github";
import RepoUI from "../components/ProfileCard";
import PaginationWrapper from "@/components/PaginationWrapper";

export default async function Home() {
  const repo = await getAllRepos();

  return (
    <main className="px-5 md:px-10 py-4">
      <div>
        <div className="grid grid-cols-fluid256 gap-6">
          {repo?.map((repo, index) => (
            <RepoUI key={index} repository={repo} />
          ))}
        </div>
        <div className="mt-10">
          <PaginationWrapper />
        </div>
      </div>
    </main>
  );
}
