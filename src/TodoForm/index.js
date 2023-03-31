import React from "react";
import { TodoContext } from "../Context/TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodos, setOpenModal } = React.useContext(TodoContext)

    const onChange = (event) =>{
        const value = event.target.value;
        setNewTodoValue(value);
    }

    const onCancel = () =>{
        setOpenModal(false);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(newTodoValue){
            addTodos(newTodoValue);   
        }
        setOpenModal(false)
        
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Agregar TODO:</label>
            <textarea 
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo..."
                name="text"
            />
            <div className="TodoForm-buttonContainer">
                <button
                onClick={onCancel}
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }