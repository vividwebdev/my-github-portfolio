import { IRefinedRepository } from "@/api/github";
import React from "react";
import { DateTime } from "luxon";

interface Props {
  repository: IRefinedRepository;
}
const Profile = (props: Props) => {
  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-300 via-cyan-500 to-yellow-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {props.repository.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {props.repository.owner?.login}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt=""
            src={props.repository.owner?.avatar_url as string}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-500">
          {props.repository.description || "Description not provided"}
        </p>
      </div>

      <div className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Updated</p>
          <p className="text-xs text-gray-500">
            {DateTime.fromISO(props.repository.updated_at as string).toFormat(
              "dd LLL, yyyy"
            )}
          </p>
        </div>

        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Open Issues</p>
          <p className="text-xs text-gray-500">
            {props.repository.open_issues}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Watchers</p>
          <p className="text-xs text-gray-500">
            {props.repository.watchers_count}
          </p>
        </div>

        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Forks</p>
          <p className="text-xs text-gray-500">
            {props.repository.forks_count}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Last Push</p>
          <p className="text-xs text-gray-500">
            {DateTime.fromISO(props.repository.pushed_at as string).toFormat(
              "dd LLL, yyyy"
            )}{" "}
          </p>
        </div>

        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Full name</p>
          <p className="text-xs text-gray-500">{props.repository.full_name}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Published</p>
          <p className="text-xs text-gray-500">
            {DateTime.fromISO(props.repository.created_at as string).toFormat(
              "dd LLL, yyyy"
            )}
          </p>
        </div>

        <div className="flex flex-col-reverse">
          <p className="text-sm font-medium text-gray-600">Top Language</p>
          <p className="text-xs text-gray-500">{props.repository.language}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
