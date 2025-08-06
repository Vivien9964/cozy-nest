import React, { useContext, useState } from 'react'
import { TasksContext } from '../../context/TaskContext'


const AddTask = () => {

  const { addTask } = useContext(TasksContext);
  const [task, setTask ] = useState("");
  const [ note, setNotes ] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      todo: task.trim(),
      notes: note,
      importance: priority, 
      completed: false
    }

    addTask(newTodo);
    setTask('');
    setNotes('');
    setPriority('');
  }

  return (
    <div>
    <form action="submit" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Add your cozy activity here...'
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />

      <input 
        type="text" 
        placeholder='Add a note...'
        value={note}
        onChange={(e) => setNotes(e.target.value)}
      />

      <label>Select priority:</label>
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button type="submit">Add</button>
    </form>
    </div>
  )
}

export default AddTask