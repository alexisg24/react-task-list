import React from "react";
import './TodoItem.css'


function TodoItem(props){
    return(
       <li className="TodoItem">
            <span 
            className={`TodoItem-Icon ${props.completed && 'TodoItem-Icon--complete'}`}
            onClick={props.onComplete}
            >&#10004;</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            className="TodoItem-Delete"
            onClick={props.onDelete}
            >&#10008;</span>
       </li>
    )
}

export { TodoItem }