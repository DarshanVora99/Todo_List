import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || ! desc){
            alert("Title and Desc cannot be blank")
        }
        props.addTodo(title,desc);
    }
  return (
    //  TODO list input 
    <div className="container my-4">
        <h2 className="text-center">Add Todo Items</h2>
        
        <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
              <div id="text" className="form-text">Add item to list </div>
            </div>

            <div className="mb-3">
              <label htmlFor="desc" className="form-label">Description</label>
              <input className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
            </div>
            
            <button type="submit" className="btn btn-success btn-sm" id="add">Add to List</button>
            {/* <button type="submit" className="btn btn-primary"  onclick="clearStorage()">Clear the List</button> */}
            </form>

      </div>
  )
}
