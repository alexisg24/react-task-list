import React from "react";
import './TodoCounter.css'

function TodoCounter(props){
    const { completed, total } = props
    return(
        <h2 className="TodoCounter">You have completed {completed} of {total} TODO's!!</h2>
    )
}

export { TodoCounter }