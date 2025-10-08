import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, updateTask } from "./taskSlice";

function TaskApp() {
  const [taskInput, setTaskInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!taskInput.trim()) return;
    dispatch(addTask(taskInput));
    setTaskInput("");
  };

  const handleUpdate = (id) => {
    if (!editText.trim()) return;
    dispatch(updateTask({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", backgroundColor: "#fdfdfd", fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>CRUD Task App</h2>

      {/* Add Task */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add new task..."
          style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleAdd}
          style={{ padding: "10px 15px", backgroundColor: "#2ecc71", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", padding: "10px", borderRadius: "8px", backgroundColor: "#f1f1f1" }}>
            
            {/* Task Text or Edit Input */}
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ flex: 1, padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                />
                <button
                  onClick={() => handleUpdate(task.id)}
                  style={{ marginLeft: "5px", padding: "5px 10px", backgroundColor: "#3498db", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <div>
                  <button
                    onClick={() => { setEditId(task.id); setEditText(task.text); }}
                    style={{ marginRight: "5px", padding: "5px 10px", backgroundColor: "#f39c12", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTask(task.id))}
                    style={{ padding: "5px 10px", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
