import React from "react";
import AddTask from "../../components/autumnPlannerComponents/AddTask";
import TaskList from "../../components/autumnPlannerComponents/TaskList";
import styles from "./AutumnPlanner.module.css";

const AutumnPlanner = () => {
  return (
    <main className={styles.plannerContainer}>
      <AddTask />
      <TaskList />
    </main>
  );
};

export default AutumnPlanner;
