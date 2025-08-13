import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

const TaskProvider = ({ children }) => {
  // Lazy initialization of state from localStorage
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("autumn_tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Load tasks from localStorage
  useEffect(() => {
    localStorage.setItem("autumn_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task to tasks array
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to delete a task based on it's id
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to toggle task status
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  // Function to delete all completed tasks
  const deleteCompleted = () => {
    const updatedTasks = tasks.filter((task) => task.completed === false);
    setTasks(updatedTasks);
  };

  // Function to edit task based on it's id
  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const contextValue = {
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
    deleteCompleted,
    editTask,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
