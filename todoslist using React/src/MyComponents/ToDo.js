import React from "react";

export default function ToDo({todoitems}){
    return(
    
        //  Component
        <>
        <div>
            <h4>{todoitems.title}</h4>
            <h6>{todoitems.desc}</h6>   
        </div>
        </>
    );
}