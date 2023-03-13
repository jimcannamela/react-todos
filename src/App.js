import './App.css';
import React, { useState } from 'react';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';

function App() {
  let initialTodos = [
    { name: 'laundry' },
    { name: 'buy groceries' },
    { name: 'mow lawn' }
  ]

  const [todos, setTodos] = useState(initialTodos);
  const [currentItem, setCurrentItem] = useState({name: ''});

  const handleChange = (e) => {
    setCurrentItem({ name: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, currentItem]);
    setCurrentItem({ name: '' });
  }

  return (
      <div className="App">
        <ToDoList todos={todos} />
        <NewToDo onChange={handleChange} onSubmit={handleSubmit} />
      </div>
  )
}

export default App;
