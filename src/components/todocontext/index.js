import React, { createContext, useContext, useState } from 'react';

// Create the context
const ToDoContext = createContext();

// Create a custom hook to access the context
const useToDoContext = () => useContext(ToDoContext);

// Create the provider component
const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Function to add a new ToDo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to remove a ToDo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Create the value object to provide to consumers
  const value = {
    todos,
    addTodo,
    removeTodo,
  };

  // Render the provider with the value and children
  return (
    <ToDoContext.Provider value={value}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoProvider, useToDoContext };
