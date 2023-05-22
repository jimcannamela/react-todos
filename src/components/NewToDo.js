import React from 'react';

function NewToDo(props) {
  return (
    <div className='NewToDo'>
        <form onSubmit={ props.onSubmit }>
            <label>New Item:</label>
            <input type="text" name="name" onChange={ props.onChange }/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default NewToDo;