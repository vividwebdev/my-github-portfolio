import { getASingleRepository } from "@/api/github";
import Profile from "@/components/Profile";
import React from "react";
import { Suspense } from "react";

export default async function Page({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  const repo = await getASingleRepository(name);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Profile repository={repo} />
    </Suspense>
  );
}
