import React, { useContext } from 'react'
import { TasksContext } from '../../context/TaskContext'

const TaskItem = ({ task }) => {

    const { deleteTask, toggleComplete } = useContext(TasksContext);

  return (
    <div>
          <h3>{task.todo}</h3>
          <p>{task.date}</p>
          <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)} 
          />
          <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
    
  )
}

export default TaskItem