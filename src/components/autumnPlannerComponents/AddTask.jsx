import React, { useContext, useState } from 'react'
import { TasksContext } from '../../context/TaskContext'
import styles from './AddTask.module.css';


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
    setPriority('low');
  }

  return (
    <main className={styles.addTaskContainer}>

      <h2 className={styles.formTitle}>Add New Activity</h2>

    <form className={styles.addTaskForm} onSubmit={handleSubmit}>

      <div className={styles.inputGroup}>
        <input 
          type="text"
          className={styles.taskInput}
          placeholder='Add your cozy activity here...'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required 
        />
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="text" 
          className={styles.noteInput}
          placeholder='Add a note...'
          value={note}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>


      <div className={styles.priorityGroup}>
        <label className={styles.priorityLabel}>Select priority:</label>
        <select 
          className={styles.prioritySelect}
          onChange={(e) => setPriority(e.target.value)} 
          value={priority}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <button className={styles.submitButton} type="submit">Add to Bucket List</button>
    </form>
    </main>
  )
}

export default AddTask