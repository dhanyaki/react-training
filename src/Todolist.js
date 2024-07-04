import React, { useState } from 'react'

function TodoList() {
  const [tasks, setTasks] = useState(["coffee", "tea", "drinks"]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {

    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }

  }
  function deleteTask() {
    const updateTask = tasks.filter((ele, i) => i);
    setTasks(updateTask);

  }
  return (
    <>
      <div className='todo-list'>
        <h1>Todolist</h1>
        <div>
          <input
            type='text'
            placeholder='enter a text...'
            value={newTask}
            onChange={handleInputChange} />
          <button type="add-button" className=" btn btn-primary" onClick={addTask}>Add</button>
        </div>
        <ol>
        {tasks.map((task, index) =>

          <li key={index}>
            <span className='text' >{task}</span>
            <button type='delete-button'className="btn btn-danger" onClick={deleteTask} >delete</button>
          </li>
          

        )}
        </ol>


      </div>

    </>
  )
}



export default TodoList