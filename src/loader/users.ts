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

export async function loader(): Promise<UserLoaderData> {
  const response = await fetch(
    "https://my-json-server.typicode.com/lucent1090/spa-demo-db/users"
  );
  const users = await response.json();
  return { data: users };
}
