import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export default TaskContext;


const useTaskContext = () => {
    return useContext(TaskContext)
}

export {useTaskContext}





const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load previously stored tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  // Store tasks in localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const updateTask = (id, newText) =>{
    setTasks(
      tasks.map((task) => task.id===id ? {...task, text: newText} : task )
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTaskCompletion, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContextProvider };
