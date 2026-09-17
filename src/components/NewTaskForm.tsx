import { useState } from "react";
import type { NewTask } from "../types/Task";

type NewTaskProps = {
  onAddTask: (task: NewTask) => void;
};

const NewTaskForm = ({ onAddTask }: NewTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    

    //console.log("Title:", title);
    //console.log("Description:", description);
    //console.log("Assignee:", assignee);
    //console.log("Category:", category);
    //console.log("Priority:", priority);

    onAddTask({
      title,
      description,
      assignee,
      category,
      priority,
    });
    setTitle("");
    setDescription("");
    setAssignee("");
    setCategory("");
    setPriority("Low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#fffaf0] p-6 rounded-lg border border-[#8b7355] max-w-2xl mx-auto mb-8"
    >
      <h2 className="text-2xl font-bold text-[#3b2f2f] mb-6">
        Create New Task
      </h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block font-semibold text-[#3b2f2f] mb-2"
        >
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full border border-[#8b7355] rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block font-semibold text-[#3b2f2f] mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full border border-[#8b7355] rounded-lg px-3 py-2 bg-white min-h-24 focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="assignee"
          className="block font-semibold text-[#3b2f2f] mb-2"
        >
          Assignee
        </label>
        <input
          id="assignee"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
          className="w-full border border-[#8b7355] rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block font-semibold text-[#3b2f2f] mb-2"
        >
          Category
        </label>
        <input
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full border border-[#8b7355] rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="priority"
          className="block font-semibold text-[#3b2f2f] mb-2"
        >
          Priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
          className="w-full border border-[#8b7355] rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
        >
          <option value="">Choose priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-[#3b2f2f] text-[#d4af37] font-bold px-4 py-3 rounded-lg hover:bg-[#2e2424] hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
      >
        Create task
      </button>
    </form>
  );
};

export default NewTaskForm;
