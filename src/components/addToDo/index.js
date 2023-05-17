import React, { useState } from 'react';
import { useToDoContext } from '../todocontext';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const { addTodo } = useToDoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new ToDo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
