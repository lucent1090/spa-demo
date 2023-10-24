import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "@emotion/styled";
import type { Task, TaskLoaderData } from "../type/tasks";

const Test = styled("div")`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

function Home() {
  const { data } = useLoaderData() as TaskLoaderData;

  const [actions, setActions] = useState<{ added: Task[]; deleted: number[] }>({
    added: [],
    deleted: [],
  });
  const [newTask, setNewTask] = useState("");

  const handleTaskBodyChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setNewTask(e.target.value);
  const handleAddNewTask = () => {
    setNewTask("");

    const { added, deleted } = actions;
    const newId = added.length + data.length + 1;
    setActions({
      deleted: deleted,
      added: added.concat([{ id: newId, body: newTask }]),
    });
  };
  const handleDelete = (id: number) => () => {
    const { added, deleted } = actions;
    const newAdded = added.filter((added) => added.id !== id);

    if (newAdded.length === added.length) {
      // The deleted task comes from the data source
      setActions({
        added: newAdded,
        deleted: deleted.concat([id]),
      });
    } else {
      setActions({
        added: newAdded,
        deleted,
      });
    }
  };

  return (
    <>
      <h1>Tasks</h1>
      <Test>Test123</Test>
      <input type="text" value={newTask} onChange={handleTaskBodyChange} />
      <button onClick={handleAddNewTask}>Add</button>

      {data
        .filter((task) => !actions.deleted.includes(task.id))
        .concat(actions.added)
        .map((task) => (
          <div key={task.id}>
            {task.body}
            <button onClick={handleDelete(task.id)}>Delete</button>
          </div>
        ))}
    </>
  );
}

export default Home;
