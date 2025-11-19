import React, { useState } from 'react'


function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleDelete(taskIndex) {
        const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <div 
              className="container p-4 my-4" 
              style={{
                border: '2px solid #0d6efd',      // Bootstrap primary blue border
                borderRadius: '10px',              // Rounded corners
                backgroundColor: '#f8f9fa'         // Light gray background (Bootstrap light)
              }}
            >
                <h2 className='mb-4'>Simple To-Do List</h2>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Task</span>
                    <input
                        type="text"
                        value={newTask}
                        placeholder="Type your Task.."
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </div>

                <div>
                    <button
                        type="button"
                        className="btn btn-outline-info me-4"
                        onClick={() => {
                            if (newTask.trim() !== "") {
                                setTasks([...tasks, newTask]);
                                setNewTask("");
                            } else {
                                alert("Please enter a task before adding!");
                            }
                        }}
                    >
                        ADD
                    </button>

                    <ul className="list-group mt-4">
                        {tasks.map((task, index) => (
                            <li
                              key={index}
                              className="list-group-item mb-2 d-flex justify-content-between align-items-center"
                              style={{
                                backgroundColor: '#e9ecef',  // Slightly darker gray for tasks
                                borderRadius: '5px'          // Rounded corners for task items
                              }}
                            >
                                {task}
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={() => setTasks([])}
                    >
                        DELETE ALL
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDoList
