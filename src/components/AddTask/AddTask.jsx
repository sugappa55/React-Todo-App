import axios from "axios";
import React, { useContext, useState } from "react";
import { Todos } from "../../TodoContext";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [todo,setTodo]=useState('')
  const {getTodos}=useContext(Todos)
  console.log("hello");
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={(e)=>setTodo(e.target.value)}/>
      <button data-testid="add-task-button" onClick={()=>{
        console.log("hello");
        if(!todo.length)return
        axios.post("http://localhost:8080/todos",{"text": todo,
        "done": false,
        "count": 1}).then(()=>getTodos())
      }}>Add task</button>
    </div>
  );
};

export default AddTask;
