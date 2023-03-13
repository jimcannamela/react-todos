import './App.css';
import React, { useState, useReducer } from 'react';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';

function App() {
  let initialTodos = [
    { name: 'laundry' },
    { name: 'buy groceries' },
    { name: 'mow lawn' }
  ]

  const todosReducer = (prevTodos, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...prevTodos, action.payload]
      case "RESET_TODOS":
        return []
      default: 
        return prevTodos;
    }
  }

  const currentItemReducer = (prevCurrentItemState, action) => {
    switch (action.type) {
      case "SET_CURRENT_ITEM":
        return {name: action.payload}

    }
  }

  const [todos, todosDispatch] = useReducer(todosReducer, initialTodos);
  const [currentItem, currentItemDispatch] = useReducer(currentItemReducer, {name: ''});


  const handleChange = (e) => {
    currentItemDispatch({ type: "SET_CURRENT_ITEM", payload: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const action = { type: "ADD_TODO", payload: currentItem }
    todosDispatch(action);
  }

  const resetTodos = () => {
    todosDispatch({ type: "RESET_TODOS" })
  }

  return (
      <div className="App">
        <button onClick={resetTodos}>Reset Todos</button>
        <ToDoList todos={todos} />
        <NewToDo onChange={handleChange} onSubmit={handleSubmit} />
      </div>
  )
}

export default App;
