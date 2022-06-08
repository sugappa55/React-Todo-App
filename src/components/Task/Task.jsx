import axios from "axios";
import React, { useContext } from "react";
import { Todos } from "../../TodoContext";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  const {todos,getTodos}=useContext(Todos)
  return (
    <div>
      {
        todos.map(e=><li data-testid="task" className={styles.task} key={e.id}>
        <input type="checkbox" data-testid="task-checkbox"  />
        <div data-testid="task-text">{e.text}</div>
        <Counter count={e.count}/>
        <button data-testid="task-remove-button"   onClick={()=>{
          axios.delete(`http://localhost:8080/todos/${e.id}`).then(()=>getTodos())

        }}>remove</button>
      </li>)
      }
    </div>
  );
};

export default Task;
