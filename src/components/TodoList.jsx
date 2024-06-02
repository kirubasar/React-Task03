import { useState } from "react";
const TodoList = ({onAdd, onFilter}) => {
    let[taskName, setTaskName] = useState("");
    let[description, setDescription] = useState("")
  
  
  const handleNameChange =(e)=> {
    setTaskName(e.target.value)
};
const handleDesChange =(e)=> {
    setDescription(e.target.value)
};
const handleAddTodo =()=>{
    onAdd(taskName, description);
    setTaskName('');
    setDescription('');
};
const handleFilterchange =(e)=>{
    onFilter(e.target.value);
}
  return (
    <>
    <div className="col-12">
      <div className="header text-center">
        <h1>My Todo</h1>
        <input className="inputTask"
      type='text' placeholder='taskName'
      onChange={handleNameChange} value={taskName}
      />
      <input className="inputTask"
      type='text' placeholder='description'
      onChange={handleDesChange} value={description}
      />
      <button className='btn btn-primary' onClick={handleAddTodo}>Add Todo</button>
    </div>
    <nav className="navbar bg-body-tertiary">
    <a className="navbar-brand"><b>My Todo</b></a>
    <div className="status-filter">
        <label><b>Status Filter :</b></label>
        <select onChange={handleFilterchange}>
          <option value="all">All</option>
          <option value="notcompleted">Notcompleted</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      </nav>
      </div>
        </>
        )
}

export default TodoList