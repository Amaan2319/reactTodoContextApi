import { useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { CheckIcon,TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

function TaskList() {
  const { tasks, removeTask, toggleTaskCompletion, updateTask } = useTaskContext();
  const [editMode, setEditMode] = useState(null)
  const [newText, setNewText] = useState("")

  const handleUpdate = (id, newText) => {
    if(newText.trim()){
        updateTask(id, newText)
        setEditMode(null)
        setNewText("")
    }
  }

  const handleEdit = (task) => {
    setEditMode(task.id)
    setNewText(task.text)
  }

  return (
    <div className="w-full max-w-md">
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white shadow-md rounded p-3 mb-2"
            >
              <CheckIcon
                onClick={() => toggleTaskCompletion(task.id)}
                className={`h-6 w-6 cursor-pointer ${
                  task.completed ? "text-green-500" : "text-gray-300"
                }`}
              />
              <span
                className={`flex-1 cursor-pointer ${
                  task.completed ? "line-through text-gray-400" : "text-black"
                }`}
              >
                {editMode === task.id ? (
                  <input
                    type="text"
                    value={newText}
                    className="bg-white w-full p-1 text-black "
                    onChange={(e) => setNewText(e.target.value)}
                  />
                ) : (
                  task.text
                )}
              </span>

              {editMode === task.id ? (
                <button onClick={() => handleUpdate(task.id, newText)} className="text-green-500 mx-2">Save</button>
              ) : (
                <button onClick={() => handleEdit(task)}>
                  <PencilSquareIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
                </button>
              )}

              <button
                onClick={() => removeTask(task.id)}
                className="text-red-500 font-bold"
              >
                <TrashIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks available. Add one!</p>
      )}
    </div>
  );
}

export default TaskList;
