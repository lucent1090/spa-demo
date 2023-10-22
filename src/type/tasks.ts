export interface Task {
  id: number;
  body: string;
}

export interface TaskLoaderData {
  data: Task[];
}
