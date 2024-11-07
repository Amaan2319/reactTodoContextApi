import { useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";

function AddTask() {
  const [task, setTask] = useState("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md mx-auto mb-6 shadow-md rounded-lg overflow-hidden"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
        className="w-full p-3 text-gray-700 focus:outline-none bg-gray-50 border border-gray-300 focus:bg-white focus:border-blue-400 transition rounded-l-lg"
      />
      <button
        type="submit"
        className="px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-300 rounded-r-lg"
      >
        Add
      </button>
    </form>
  );
}

export default AddTask;
