import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal, openModal}){
    const onClickButton = (event) =>{
        //setOpenModal(prevState => !prevState);
        if(openModal){
            setOpenModal(false)
            event.target.classList.toggle('active')
        }else{
            setOpenModal(true)
            event.target.classList.toggle('active')
        }
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}>
            +
        </button>
    )
}

export { CreateTodoButton }