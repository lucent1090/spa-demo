import { useLoaderData } from "react-router-dom";
import { UserLoaderData } from "../loader/users";

function Users() {
  const { data } = useLoaderData() as UserLoaderData;

  return (
    <table>
      <tbody>
        {data.map((user, index) => (
          <tr key={`${index + user.id}`}>
            <td>
              {user.firstName} {user.lastName}
            </td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
