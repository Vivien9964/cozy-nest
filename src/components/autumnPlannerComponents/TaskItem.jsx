import React, { useContext, useState } from 'react'
import { TasksContext } from '../../context/TaskContext'

const TaskItem = ({ task }) => {

    const { deleteTask, toggleComplete } = useContext(TasksContext);

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.todo);

  return (
    <li>

        <div>
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)} 
            />
        </div>

        <div>
            <h3 onClick={() => setIsEditing(!isEditing)}>{task.todo}</h3>
            <p>{task.notes}</p>
            <p>Priority: <strong>{task.importance}</strong></p>
            <small>Added: {task.date}</small>
        </div>

        <button onClick={() => deleteTask(task.id)}>✖</button>
    </li>

  )
}

export default TaskItem