import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  return <div>This is user detail: {id}</div>;
}

export default UserDetail;
