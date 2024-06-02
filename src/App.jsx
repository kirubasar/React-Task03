import TodoList from './components/TodoList';
import './App.css';
import { useState } from 'react';
import TodoCard from './components/TodoCard';
const App = () => {
  const[todos, setTodos]= useState([]);
  const[filter, setFilter]=useState("all");
  const addTodo = (taskName, description) => {
    const newTodo = {
      id: Date.now(),
      taskName,
      description,
      status: 'notcompleted',
    };
    setTodos([...todos, newTodo]);
  };

const deletTodo =(id)=>{
  setTodos(todos.filter(todo=>todo.id !== id))
};
const updateStatus = (id, newStatus) => {
  setTodos(todos.map(todo => todo.id === id ? { ...todo, status: newStatus } : todo));
};

const filterTodos = (status) => {
  setFilter(status);
};
const getFilteredTodos = () => {
  if (filter === 'completed') {
    return todos.filter(todo => todo.status === 'completed');
  } else if (filter === 'notcompleted') {
    return todos.filter(todo => todo.status === 'notcompleted');
  }
  return todos;
};
return (
    <div className='contianer p-5'>
    <div  className='row'>
      < TodoList onAdd = {addTodo}
     onFilter ={filterTodos}
     />
      
     {getFilteredTodos().map(todo => (
      <div className='col-md-4'key={todo.id}>
      <TodoCard 
      {...todo} onDelete={deletTodo}
       onStatusChange={updateStatus}
     />
     </div>
     
     ))}
     </div>
     </div>
  )
}

export default App;