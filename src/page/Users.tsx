import { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";

import type { UserLoaderData } from "../type/users";
import sort from "../utils/sort";

const ActionArea = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 40%;
  margin-right: 2rem;
`;

const Select = styled.select`
  padding: 0.3rem 0.3rem;
  height: 2rem;
`;

const Pagination = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
`;

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
      <h1>User List</h1>

      <ActionArea>
        <label htmlFor="search">Search</label>
        <Input
          id="search"
          type="text"
          value={search}
          onChange={handleSearchChange}
        />

        <label htmlFor="sortBy">Sort</label>
        <Select id="sortBy" onChange={handleSortByChange}>
          <option value="name">Name</option>
          <option value="age">Age</option>
        </Select>
      </ActionArea>

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

      <Pagination>
        <button onClick={handlePrevPage}>Prev Page</button>
        {page}
        <button onClick={handleNextPage}>Next Page</button>
      </Pagination>
    </>
  );
}

export default Users;
