import React from 'react';
import ToDo from './ToDo.js'

function ToDoList(props) {
  return (
    <div className='ToDoList'>
        <div className='App-header'>My To Do List:</div>
        <ul>
         { props.todos.map((item, index) => <li key={index}><ToDo todo={item}/></li>) }
        </ul>
    </div>
  );
}

export default ToDoList;