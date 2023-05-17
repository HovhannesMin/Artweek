import { ToDoProvider } from '../todocontext';
import AddTodo from '../addToDo';
import ToDoList from '../removeToDo';

const ToDo = () => {
    return (
      <ToDoProvider>
        <h1>ToDo List</h1>
        <AddTodo />
        <ToDoList />
      </ToDoProvider>
    );
  };
  
  export default ToDo;