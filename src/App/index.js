import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../Context/TodoContext";
// import './App.css';

function App(props) {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
