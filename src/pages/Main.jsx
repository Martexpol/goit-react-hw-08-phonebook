import { useState } from "react";
import Task from "../components/Task";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/slices/tasks.slice";
import { statusFilters } from "../constants";
import { setStatusFilter } from "../redux/slices/filters.slice";

export default function Main() {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const statusFilter = useSelector((state) => state.filters.status);

  const handleFilters = (statusFilter) => () => {
    dispatch(setStatusFilter(statusFilter));
  };

  const create = (ev) => {
    ev.preventDefault();
    dispatch(
      addTask({
        id: nanoid(),
        title: taskTitle,
        completed: false,
      }),
    );
  };

  return (
    <div>
      <h1>Zadania</h1>
      <form onSubmit={create}>
        <input
          type="text"
          value={taskTitle}
          onChange={(ev) => setTaskTitle(ev.target.value)}
        />
        <button type="submit">+ Utwórz</button>
      </form>
      <div>
        <p>Filtry</p>
        <button onClick={handleFilters(statusFilters.all)}>Wszystkie</button>
        <button onClick={handleFilters(statusFilters.completed)}>
          Ukończone
        </button>
        <button onClick={handleFilters(statusFilters.active)}>
          Nieukończone
        </button>
      </div>
      {tasks
        .filter((task) => {
          if (statusFilter === statusFilters.all) {
            return true;
          } else if (statusFilter === statusFilters.completed) {
            return task.completed;
          } else {
            return !task.completed;
          }
        })
        .map((task, idx) => (
          <Task key={idx} {...task} />
        ))}
    </div>
  );
}
