import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();


const TaskProvider = ({ children }) => {


    // Lazy initialization of state from localStorage 
    // -> initial state is read from localStorage once when the component mounts
    const [ tasks, setTasks ] = useState(() => {
        const storedTasks = localStorage.getItem("autumn_tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    // Load tasks from localStorage
    useEffect(() => {
        localStorage.setItem("autumn_tasks", JSON.stringify(tasks))
    }, [tasks]);

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