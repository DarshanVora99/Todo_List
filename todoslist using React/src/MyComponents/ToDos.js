import React from "react";
import ToDo from "./ToDo";

export default function ToDos(props){
    return(
    
        // Use to display ToDO
        <>
        <div className="container">
            <h3>ToDOs Lists</h3>
            
            <ToDo todoitems={props.allToDos[0]}/>
            
        </div>
        </>
    );
}