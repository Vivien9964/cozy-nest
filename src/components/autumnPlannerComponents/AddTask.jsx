import React, { useContext, useState } from 'react'
import { TasksContext } from '../../context/TaskContext'


const AddTask = () => {

  const {addTask} = useContext(TasksContext);
  const [task, setTask ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      todo: task.trim(),
      completed: false
    }

    addTask(newTodo);
    setTask('');
  }

  return (
    <div>

    <form action="submit" onSubmit={handleSubmit}>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />

      <button type="submit">Submit</button>
    </form>





    </div>
  )
}

export default AddTask