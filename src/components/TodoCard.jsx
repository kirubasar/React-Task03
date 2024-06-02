const TodoCard = ({ id, taskName, description,  status, onDelete, onStatusChange}) => {
 
    const handleStatusChange = (event) => {
          onStatusChange(id, event.target.value);
        };
        
      return (
          <div>
            <div className="col-md-4">
            <div className='todo-card'>
                    <div className='card-item'>
                       <p>TaskName:{taskName}</p>
                       <p>Description:{description}</p>
                        <div className='status-list'>
                         <label>Status:</label>
                         <select value={status} onChange={handleStatusChange}>
                          <option value="notcompleted">NotCompleted</option>
                          <option value="completed">Completed</option>
                         </select>
                        </div>
                          <button className='btn-primary'>Edit</button>
                          <button className='btn-secondory'onClick={() => onDelete(id)} >Delete</button>
                    </div>
                 </div>
               </div>
               </div>
                 
      )
  }
  export default TodoCard;