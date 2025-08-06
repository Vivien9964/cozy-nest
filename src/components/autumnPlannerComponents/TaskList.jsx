import React, { useContext } from 'react'
import { TasksContext } from '../../context/TaskContext'

const TaskList = () => {

  const { tasks, deleteTask, toggleComplete, sortTasks } = useContext(TasksContext);


  return (
    <div>

      <ul style={{ listStyle: "none"}}>
      {tasks.map((task) => {
        return <li key={task.id}>
          <h3>{task.todo}</h3>
          <p>{task.date}</p>
          <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)} 
          />
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      })}
      </ul>

      



    </div>
  )
}

export default TaskList