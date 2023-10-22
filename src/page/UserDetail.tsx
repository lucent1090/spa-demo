import { Link, useLoaderData } from "react-router-dom";
import type { UserData } from "../type/users";

function UserDetail() {
  const { firstName, lastName, email, age, address, profileImage } =
    useLoaderData() as UserData;

  return (
    <>
      <Link to="/users">Back</Link>
      <img src={profileImage} alt="profile image" />
      <div>{`${firstName} ${lastName}`}</div>
      <div>{`${email}`}</div>
      <div>{`${age} years old`}</div>
      <div>{`${address}`}</div>
    </>
  );
}

export default UserDetail;
