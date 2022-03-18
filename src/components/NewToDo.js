import React from 'react';

function NewToDo(props) {
  return (
    <div>
        <form onSubmit={ props.onSubmit }>
            <label>
                New Item:
                <input type="text" name="name" onChange={ props.onChange }/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default NewToDo;