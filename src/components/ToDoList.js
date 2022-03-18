import React from 'react';
import ToDo from './ToDo.js'

function ToDoList(props) {
  return (
    <div>
        My To Do List:
        <ul>
         { props.todos.map((item, index) => <li key={index}><ToDo todo={item}/></li>) }
        </ul>
    </div>
  );
}

export default ToDoList;