import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebollas', completed: true },
  { text: 'Cortar tomates', completed: false },
  { text: 'Tomar curso intro a react', completed: false },
]

function App(props) {
  const [ todos, setTodos ] = React.useState(defaultTodos);
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
    setTodos(newTodos)
  }

  const deleteTodos = (text) =>{
    const newTodos = [...todos];
    newTodos.splice(todos.findIndex(item => item.text === text), 1)
    setTodos(newTodos)
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
