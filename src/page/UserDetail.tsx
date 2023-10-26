import { Link, useLoaderData } from "react-router-dom";
import styled from "@emotion/styled";

import type { UserData } from "../type/users";

const ActionArea = styled.div`
  margin-bottom: 1rem;
`;

const DetailArea = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "profile name"
    "profile email"
    "profile age"
    "profile address";
`;

const Profile = styled.img`
  grid-area: profile;
`;

const Name = styled.div`
  grid-area: name;
  align-self: center;
  font-weight: 500;
`;

const Email = styled.div`
  grid-area: email;
  align-self: center;
`;

const Age = styled.div`
  grid-area: age;
  align-self: center;
`;

const Address = styled.div`
  grid-area: address;
  align-self: center;
`;

function UserDetail() {
  const {
    firstName = "",
    lastName = "",
    email = "",
    age = "",
    address = "",
    profileImage = "",
  } = useLoaderData() as UserData;

  return (
    <>
      <ActionArea>
        <Link to="/users">Back to user list</Link>
      </ActionArea>

      <DetailArea>
        <Profile
          src={profileImage}
          alt="profile image"
          width="250"
          height="250"
        />
        <Name>{`${firstName} ${lastName}`}</Name>
        <Email>{`${email}`}</Email>
        <Age>{`${age} years old`}</Age>
        <Address>{`${address}`}</Address>
      </DetailArea>
    </>
  );
}

export default UserDetail;
