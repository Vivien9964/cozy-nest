import React, { useContext, useState } from "react";
import { TasksContext } from "../../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, deleteCompleted } = useContext(TasksContext);
  const [ priorityFilter, setPriorityFilter ] = useState("all");

  const filteredTasks = priorityFilter === "all" ? tasks : tasks.filter((task) => task.importance === priorityFilter);
  
  return (
    <div>
      {tasks.length === 0  ? (
        <p>No tasks yet!</p>
      ) : (
        <div>
          <h1>Your Bucket List</h1>

          <div>
            <button onClick={deleteCompleted}>Clear Completed</button>

            <label>Sort by priority:</label>
            <select onChange={(e) => setPriorityFilter(e.target.value)} value={priorityFilter}>
              <option value="all">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>

            </select>
           </div>

          <ul style={{ listStyle: "none" }}>
            {filteredTasks.map((task) => {
              return <TaskItem key={task.id} task={task} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
