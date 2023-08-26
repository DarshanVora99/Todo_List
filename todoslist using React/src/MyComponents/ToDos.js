import React from 'react'
import {ToDoItem} from "./ToDoItem";


export const ToDos = (props) => {
  return (

    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3>
      
      {
      props.todos.length === 0 ? <><h5>No Todos to display</h5></>:
      props.todos.map((todo)=>{

        return <>
        <ToDoItem todo= {todo} key={todo.sno} onDelete={props.onDelete}/>
        <hr />
        </> 
      
      })
      }
      


    </div>
    
  )
}

