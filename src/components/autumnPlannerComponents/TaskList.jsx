import React, { useContext, useState } from "react";
import { TasksContext } from "../../context/TaskContext";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = () => {

  const { tasks, deleteCompleted } = useContext(TasksContext);
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredTasks =
    priorityFilter === "all"
      ? tasks
      : tasks.filter((task) => task.importance === priorityFilter);

  return (
    <main className={styles.taskListContainer}>
      {tasks.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No tasks yet!</p>
        </div>
      ) : (
        <div>
          <h1 className={styles.bucketListTitle}>Your Autumn Bucket List</h1>

          <div className={styles.controlsContainer}>
            <button className={styles.clearButton} onClick={deleteCompleted}>
              Clear Completed
            </button>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Sort by priority:</label>
              <select
                className={styles.filterSelect}
                onChange={(e) => setPriorityFilter(e.target.value)}
                value={priorityFilter}
              >
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>  

          {filteredTasks.length === 0 ? (
            <p className={styles.emptyState}>No tasks found!</p>
          ):(

            <ul className={styles.tasksList}>
            {filteredTasks.map((task) => {
              return <TaskItem key={task.id} task={task} />;
            })}
          </ul>

          )}
         
        </div>
      )}
    </main>
  );
};

export default TaskList;
