import type { Task, NewTask } from "./types/Task";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import TaskBoardPage from "./pages/TaskBoardPage";
import CreateTaskPage from "./pages/CreateTaskPage";

const apiUrl = "http://localhost:3005/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Could not fetch tasks");
      }
      const result: Task[] = await response.json();
      setTasks(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const executeFetch = async () => {
      await fetchTasks();
    };
    executeFetch();
  }, []);

  const addTask = async (newTask: NewTask) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Could not create task");
      }
    } catch (error) {
      console.log(error);
    }

    await fetchTasks();
  };

  return (
    <>
      <header>
        <nav>
          <Link to="/">Task Board</Link>
          <Link to="/new-task">Create Task</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<TaskBoardPage tasks={tasks} />} />

        <Route
          path="/new-task"
          element={<CreateTaskPage onAddTask={addTask} />}
        />
      </Routes>
    </>
  );
};

export default App;
