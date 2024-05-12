import { getASingleRepository } from "@/api/github";
import Profile from "@/components/Profile";
import React from "react";

export default async function Page({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  const repo = await getASingleRepository(name);
  console.log("repo", repo);
  return (
    <div>
      <Profile repository={repo} />
      {/* <h1>{name}</h1> */}
    </div>
  );
}
