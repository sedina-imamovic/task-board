type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  priority: string;
};

const TaskCard = ({
  id,
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProps) => {
  return (
    <article className="bg-[#fffaf0] p-4 rounded-lg border border-[#8b7355]">
      <h3 className="text-xl font-bold text-[#3b2f2f] mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="inline-block border border-[#2e7d32] text-[#2e7d32] px-2 py-1 rounded text-sm mr-2 mb-3">
        Category: {category}
      </p>
      <p className="text-gray-700 mb-2">Assignee: {assignee}</p>
      <p
        className={`inline-block font-bold px-2 py-1 rounded text-sm ${
          priority.toLowerCase() === "high"
            ? "bg-[#c0392b] text-white"
            : priority.toLowerCase() === "medium"
              ? "bg-[#d4af37] text-[#3b2f2f]"
              : "bg-[#6b8e23] text-white"
        }`}
      >
        Priority: {priority}
      </p>
      <p className="text-sm text-gray-600 mt-3">Task ID: {id}</p>
    </article>
  );
};

export default TaskCard;
