import type { UserData } from "../type/users";

export async function loader({
  params,
}: {
  params: { id: string };
}): Promise<UserData> {
  const response = await fetch(
    `https://my-json-server.typicode.com/lucent1090/spa-demo-db/users/${params.id}`
  );
  const data = (await response.json()) as UserData;

  return { ...data };
}
