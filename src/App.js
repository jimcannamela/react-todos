import './App.css';
import React from 'react';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';

function App() {
  let todos = [
    { name: 'laundry' },
    { name: 'buy groceries' },
    { name: 'mow lawn' }
  ]

  let currentItem = {
    name: ''
  }

  const handleChange = (e) => {
    currentItem =  { name: e.target.value }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    todos.push(currentItem);
    currentItem = { name: '' }
  }

  return (
      <div className="App">
        <ToDoList todos={todos} />
        <NewToDo onChange={handleChange} onSubmit={handleSubmit} />
      </div>
  )
}

export default App;
