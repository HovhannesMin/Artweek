import React, { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

const useToDoContext = () => useContext(ToDoContext);

const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const value = {
    todos,
    addTodo,
    removeTodo,
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export { ToDoProvider, useToDoContext };
