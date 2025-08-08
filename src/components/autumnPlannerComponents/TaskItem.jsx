import React, { useContext, useState } from "react";
import { TasksContext } from "../../context/TaskContext";
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleComplete, editTask } = useContext(TasksContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.todo);
  const [editedNotes, setEditedNotes] = useState(task.notes);
  const [editedPriority, setEditedPriority] = useState(task.importance);

  const handleEdit = () => {
    const updatedTask = {
      todo: editedTask.trim(),
      notes: editedNotes,
      importance: editedPriority,
    };

    editTask(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task.todo);
    setEditedNotes(task.notes);
    setEditedPriority(task.importance);
    setIsEditing(false);
  };

  return (
    <li className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.taskContent}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.taskCheckbox}
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
        </div>

        <div className={styles.taskDetails}>
          {isEditing ? (
            <div className={styles.editForm}>
              <input
                type="text"
                className={styles.editInput}
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                placeholder="Edit activity..."
              />

              <input
                type="text"
                className={styles.editInput}
                value={editedNotes}
                onChange={(e) => setEditedNotes(e.target.value)}
                placeholder="Edit notes..."
              />

              <select
                className={styles.editSelect}
                value={editedPriority}
                onChange={(e) => setEditedPriority(e.target.value)}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <div className={styles.editButtons}>
                <button 
                  className={styles.saveButton}
                  onClick={handleEdit}
                >
                  Save
                </button>
                <button 
                  className={styles.cancelButton}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 
                className={styles.taskTitle}
                onClick={() => setIsEditing(true)}
              >
                {task.todo}
              </h3>
              
              {task.notes && (
                <p className={styles.taskNotes}>{task.notes}</p>
              )}
              
              <div className={styles.taskMeta}>
                <span className={`${styles.priorityBadge} ${styles[task.importance]}`}>
                  {task.importance} priority
                </span>
                <small className={styles.taskDate}>Added: {task.date}</small>
              </div>
            </div>
          )}
        </div>

        <button 
          className={styles.deleteButton}
          onClick={() => deleteTask(task.id)}
          aria-label="Delete task"
        >
          ✖
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
