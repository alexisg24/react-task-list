import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../Context/TodoContext";
import { Modal } from "../Modal";

function AppUI(){
  const {error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal} = React.useContext(TodoContext)
    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
           {error && <p>Error encontrado, por favor recargue la pagina!</p>}
           {loading && <p>Cargando elementos, por favor espere!</p>}
           {(!loading && searchedTodos.length === 0) && <p>No hay elementos disponibles</p>}
           {searchedTodos.map(item => (
            <TodoItem 
              key={item.text} 
              text={item.text} 
              completed={item.completed} 
              onComplete={()=>completeTodos(item.text)}
              onDelete={()=>deleteTodos(item.text)}
            />
         ))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
      </Modal>
      )}

     <CreateTodoButton
      setOpenModal={setOpenModal}
      openModal={openModal}
     />
    </React.Fragment>
    )
}

export { AppUI }