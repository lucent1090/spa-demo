import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { Task, TaskLoaderData } from "../type/tasks";

function Home() {
  const { data } = useLoaderData() as TaskLoaderData;

  const [actions, setActions] = useState<{ added: Task[]; deleted: number[] }>({
    added: [],
    deleted: [],
  });
  const [newTask, setNewTask] = useState("");

  const handleTaskBodyChange = (e) => setNewTask(e.target.value);
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
      // Deleted one comes from the data source
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
