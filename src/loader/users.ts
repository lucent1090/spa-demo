import type { UserLoaderData, UserData } from "../type/users";
import getOffset from "../utils/getOffset";

export async function loader({
  request,
}: {
  request: Request;
}): Promise<UserLoaderData> {
  const page = parseInt(new URL(request.url).searchParams.get("page") || "1");
  const search = new URL(request.url).searchParams.get("search");

  const hasSearch = !!search;

  const response = await fetch(
    "https://my-json-server.typicode.com/lucent1090/spa-demo-db/users"
  );
  const users = (await response.json()) as UserData[];
  if (!users || users.length === 0) {
    return { data: [] };
  }

  const data = users
    .filter((user) => !!user.id)
    .filter((user) =>
      hasSearch ? `${user.firstName}${user.lastName}`.includes(search) : true
    )
    .slice(...getOffset(users.length, page));

  return { data };
}
