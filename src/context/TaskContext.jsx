import { createContext, useState } from "react";

export const TasksContext = createContext();


const TaskProvider = ({ children }) => {

    const [ tasks, setTasks ] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    const toggleComplete = (id) => {

        const updatedTasks = tasks.map((task) => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        
        setTasks(updatedTasks);
    }




    const contextValue = {
        tasks,
        addTask,
        deleteTask, 
        toggleComplete, 
    }




  return <TasksContext.Provider value={contextValue} >
    { children }
  </TasksContext.Provider>
}

export default TaskProvider