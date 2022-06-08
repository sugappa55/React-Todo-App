

import axios from 'axios'
import React, { Children, createContext, useEffect, useState } from 'react'

export const Todos=createContext()

const TodoContext = ({children}) => {
    const[todos,setTodos]=useState([])

    const getTodos=()=>{
        axios.get("http://localhost:8080/todos").then(({data})=>{
            setTodos(data)
        })
    }
    useEffect(()=>{
        getTodos()
    },[])
  return (
    <Todos.Provider value={{todos,getTodos}}>
      {children}
    </Todos.Provider>
  )
}

export default TodoContext
