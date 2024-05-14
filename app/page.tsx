import { getAllRepos } from "@/api/github";
import ProfileCard from "../components/ProfileCard";
import Pagination from "@/components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page: string; perPage: string };
}) {
  const page = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.perPage) || 10;

  const { repos, paginationLinks } = await getAllRepos(perPage, page);

  return (
    <main className="px-5 md:px-10 py-4">
      <div>
        <div className="grid grid-cols-fluid256 gap-6">
          {repos?.map((repo, index) => (
            <ProfileCard key={index} repository={repo} />
          ))}
        </div>
        <div className="mt-10">
          <Pagination paginationLinks={paginationLinks} />
        </div>
      </div>
    </main>
  );
}
