import { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

import type { UserLoaderData } from "../type/users";
import sort from "../utils/sort";

function Users() {
  const { data } = useLoaderData() as UserLoaderData;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");

  const [sortBy, setSortBy] = useState("");
  const sortByFunc = sort[sortBy ?? "dontSort"];

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchParams({ search: e.target.value });
  const handleSortByChange: React.ChangeEventHandler<HTMLSelectElement> = (e) =>
    setSortBy(e.target.value);
  const handlePrevPage = () => setSearchParams({ page: `${page - 1}` });
  const handleNextPage = () => setSearchParams({ page: `${page + 1}` });

  return (
    <>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />

      <label htmlFor="sortBy">Sort:</label>
      <select id="sortBy" onChange={handleSortByChange}>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.sort(sortByFunc).map((user) => (
            <tr key={user.id}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`${user.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handlePrevPage}>Prev Page</button>
      {page}
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}

export default Users;
