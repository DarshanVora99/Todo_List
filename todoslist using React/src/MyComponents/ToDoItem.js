import React from 'react'

export const ToDoItem = ({todo, onDelete}) => {
  return (
    <div>
      
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" key= {todo.key} onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
