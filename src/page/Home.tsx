import { Fragment, useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "@emotion/styled";

import type { Task, TaskLoaderData } from "../type/tasks";

const TaskArea = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 4rem auto;
  row-gap: 0.5rem;
`;

const Button = styled.button`
  justify-self: center;
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
    if (newTask === "") {
      return;
    }

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
      <TaskArea>
        <input type="text" value={newTask} onChange={handleTaskBodyChange} />
        <Button onClick={handleAddNewTask}>Add</Button>
        {data
          .filter((task) => !actions.deleted.includes(task.id))
          .concat(actions.added)
          .map((task) => (
            <Fragment key={task.id}>
              {task.body}
              <Button onClick={handleDelete(task.id)}>Delete</Button>
            </Fragment>
          ))}
      </TaskArea>
    </>
  );
}

export default Home;
