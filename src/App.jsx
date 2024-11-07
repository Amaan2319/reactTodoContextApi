import './App.css'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TaskContextProvider } from './contexts/TaskContext';


function App() {

  return (
    <TaskContextProvider>
      <div className="min-h-screen w-screen flex flex-col items-center p-6 bg-gray-100 text-gray-800">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}

export default App
