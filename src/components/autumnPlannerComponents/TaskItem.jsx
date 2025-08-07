import React, { useContext, useState } from "react";
import { TasksContext } from "../../context/TaskContext";

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
    <li>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
      </div>

      <div>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              placeholder="Edit activity..."
            />

            <input
              type="text"
              value={editedNotes}
              onChange={(e) => setEditedNotes(e.target.value)}
              placeholder="Edit notes..."
            />

            <select
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <button onClick={handleEdit}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div>
            <h3 onClick={() => setIsEditing(true)}>{task.todo}</h3>
            <p>{task.notes}</p>
            <p>
              Priority: <strong>{task.importance}</strong>
            </p>
            <small>Added: {task.date}</small>
          </div>
        )}
      </div>

      <button onClick={() => deleteTask(task.id)}>✖</button>
    </li>
  );
};

export default TaskItem;
