import React, { useContext } from "react";
import { Todos } from "../../TodoContext";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  const {todos}=useContext(Todos)
  
  let unCompletedTask=(todos.filter(e=>!e.done).length)
  let totalTask=todos.length

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo App</h1>
      <b data-testid="header-remaining-task">Pending:{unCompletedTask}</b>{"  "}
      <b data-testid="header-total-task">Completed:{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
