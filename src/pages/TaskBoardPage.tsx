import Header from "../components/Header";
import Footer from "../components/Footer";
import TaskCard from "../components/TaskCard";
import Column from "../components/Column";
import type { Task } from "../types/Task";
import { useState } from "react";

type TaskBoardPageProps = {
  tasks: Task[];
};

const TaskBoardPage = ({ tasks }: TaskBoardPageProps) => {
  const [searchWord, setSearchWord] = useState("");

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      task.description.toLowerCase().includes(searchWord.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchWord.toLowerCase()) ||
      task.category.toLowerCase().includes(searchWord.toLowerCase()) ||
      task.priority.toLowerCase().includes(searchWord.toLowerCase()),
  );

  const todoTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "todo",
  );

  const doingTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "doing",
  );

  const doneTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "done",
  );

  return (
    <div className="min-h-screen bg-[#eee8d5]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#3b2f2f] mb-8 text-center">
          Task Board
        </h1>

        <input
          type="text"
          value={searchWord}
          onChange={(event) => setSearchWord(event.target.value)}
          placeholder="Search..."
          className="w-full max-w-2xl mx-auto block border border-[#8b7355] rounded-lg px-3 py-2 mb-8 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Column title="Todo">
            {todoTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}
              />
            ))}
          </Column>

          <Column title="Doing">
            {doingTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}
              />
            ))}
          </Column>

          <Column title="Done">
            {doneTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}
              />
            ))}
          </Column>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TaskBoardPage;
