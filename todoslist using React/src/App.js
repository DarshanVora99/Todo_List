import './App.css';
import Header from "./MyComponents/Header";
import { ToDos } from "./MyComponents/ToDos";
import { Fotter } from "./MyComponents/Fotter";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';


function App() {
  function onDelete(todo) {
    console.log("I am ondelete of todo", todo);

    // Deleting this way in react does not work
    // let index_of_todo = todos.indexOf(todo);
    // todos.splice(index_of_todo,1); // delete one element at index_of_todo 

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  function addTodo(title, desc) {
    console.log("I am adding todo ", title, desc)
    let sno;
    if(todos.length == 0){
       sno = 0 ;
    }
    else{
     sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      title: title,
      desc: desc,
      sno: sno
    }
    console.log(mytodo);
    setTodos([...todos, mytodo])

  }
  const [todos, setTodos] = useState([
    // {
    //   sno: 1,
    //   title: "Clean Cubbord",
    //   priority: 10,
    //   desc: "You need to cleam cubbord and add more space to it As Quick as possible"

    // },
    // {
    //   sno: 2,
    //   title: "Go to Clai World",
    //   priority: 7,
    //   desc: "You need to Go to Clai World to buy clothes"
    // },
    // {
    //   sno: 3,
    //   title: "Go to somewhere out",
    //   priority: 10,
    //   desc: "You need to Go to either Gujarat Morbi if possible with highest priority else go to somewhere near pune (Note. I went and came from Gujarat i am really happy most happiest person in world rn :)  )"
    // }
  ])
  return (


    <>
      <Header title="ToDos list" owner="Darshan Vora" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <ToDos todos={todos} onDelete={onDelete} />
      <Fotter />


    </>


  );
}

export default App;
