interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address: string;
  profileImage: string;
}

export interface UserLoaderData {
  data: UserData[];
}

export async function loader({ request }): Promise<UserLoaderData> {
  const page = parseInt(new URL(request.url).searchParams.get("page") || "1");
  const search = new URL(request.url).searchParams.get("search");

  const hasOffset = !!page;
  const hasSearch = !!search;

  const response = await fetch(
    "https://my-json-server.typicode.com/lucent1090/spa-demo-db/users"
  );
  const users = (await response.json()) as UserData[];

  // calc pagination
  const totalPage = Math.round(users.length / 10);
  const offset =
    page < 1 ? 0 : page > totalPage ? (totalPage - 1) * 10 : (page - 1) * 10;

  console.log("page", page);
  console.log("offset", offset);

  const data = users
    .filter((user) =>
      hasSearch ? `${user.firstName}${user.lastName}`.includes(search) : true
    )
    .slice(...(hasOffset ? [offset, offset + 10] : [0, 10]));

  return { data };
}
