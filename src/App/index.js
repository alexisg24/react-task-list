import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from '../Hooks/useLocalStorage'
// import './App.css';

function App(props) {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
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


  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
  );
}

export default App;
