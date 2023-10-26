import type { Task, TaskLoaderData } from "../type/tasks";

export async function loader(): Promise<TaskLoaderData> {
  const response = await fetch(
    "https://my-json-server.typicode.com/lucent1090/spa-demo-db/tasks"
  );
  const tasks = (await response.json()) as Task[];
  if (!tasks) {
    // show page with empty list
    return {
      data: [],
    };
  }

  return { data: tasks };
}
