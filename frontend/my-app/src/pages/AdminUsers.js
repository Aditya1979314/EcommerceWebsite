import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { RowUsers } from "../components/RowUsers";
import { allusersAtom } from "../Stores/atoms/AdminAtoms";

export function AdminUsers() {
  const dataLoadable = useRecoilValueLoadable(allusersAtom);

  return (
    <section className="container px-4 mx-auto">
      {dataLoadable.state === 'loading' && (
        <div>...loading</div>
      )}

      {dataLoadable.state === 'hasValue' && (
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Password
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {dataLoadable.contents.map((obj) => (
                      <RowUsers
                        key={obj.user_id}
                        id={obj.user_id}
                        username={obj.username}
                        email={obj.email}
                        password={obj.password}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {dataLoadable.state === 'hasError' && (
        <div>Error loading data.</div>
      )}
    </section>
  );
}
