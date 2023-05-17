import React from 'react';
import { useToDoContext } from '../todocontext';

const ToDoList = () => {
  const { todos, removeTodo } = useToDoContext();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
