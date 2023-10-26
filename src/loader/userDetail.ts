import { redirect } from "react-router-dom";
import type { UserData } from "../type/users";

export async function loader({
  params,
}: {
  params: { id?: string };
}): Promise<UserData | Response> {
  const response = await fetch(
    `https://my-json-server.typicode.com/lucent1090/spa-demo-db/users/${params.id}`
  );
  const data = (await response.json()) as UserData;
  if (!data || !data.id) {
    // redirect back to user list if user not exists
    return redirect("/users");
  }

  return { ...data };
}
