import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../Context/TodoContext";

function AppUI(){
  const {error, loading, searchedTodos, completeTodos, deleteTodos} = React.useContext(TodoContext)
    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
           {error && <p>Error encontrado, por favor recargue la pagina!</p>}
           {loading && <p>Cargando todos!</p>}
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
     <CreateTodoButton/>
    </React.Fragment>
    )
}

export { AppUI }