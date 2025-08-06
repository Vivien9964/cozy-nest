import React, { useContext } from "react";
import { TasksContext } from "../../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <div>
          <h1>Your Bucket List</h1>
          <ul style={{ listStyle: "none" }}>
            {tasks.map((task) => {
              return <TaskItem key={task.id} task={task} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
