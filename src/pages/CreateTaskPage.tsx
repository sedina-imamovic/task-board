import NewTaskForm from "../components/NewTaskForm";
import type { NewTask } from "../types/Task";

type CreateTaskPageProps = {
  onAddTask: (task: NewTask) => void;
};

const CreateTaskPage = ({ onAddTask }: CreateTaskPageProps) => {
  return (
    <div className="min-h-screen bg-[#eee8d5]">
      <NewTaskForm onAddTask={onAddTask} />
    </div>
  );
};

export default CreateTaskPage;