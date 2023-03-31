import React from "react";
import { useLocalStorage } from '../Hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
    const [ searchValue, setSearchValue ] = React.useState('');
  
    let searchedTodos = [];
    if(!searchValue.length >= 1){
      searchedTodos = todos;
    }else{
      searchedTodos = todos.filter(item => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    }
  
    const completedTodos = searchedTodos.filter(item=>!!item.completed).length
    const totalTodos = searchedTodos.length;
  
    const completeTodos = (text) =>{
      const newTodos = [...todos];
      newTodos[todos.findIndex(item => item.text === text)].completed = true
      saveTodos(newTodos)
    }
  
    const deleteTodos = (text) =>{
      const newTodos = [...todos];
      newTodos.splice(todos.findIndex(item => item.text === text), 1)
      saveTodos(newTodos)
    }
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {
    TodoContext,
    TodoProvider
}