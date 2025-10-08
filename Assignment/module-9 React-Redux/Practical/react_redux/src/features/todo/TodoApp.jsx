import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, toggleTask } from "./todoSlice";

function TodoApp() {
  const [task, setTask] = useState("");
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() === "") return;
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", backgroundColor: "#fdfdfd", fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Redux Todo List</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Add a task..."
          style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button onClick={handleAdd} style={{ padding: "10px 15px", backgroundColor: "#2ecc71", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", marginBottom: "10px", borderRadius: "8px", backgroundColor: "#f1f1f1", textDecoration: todo.completed ? "line-through" : "none", opacity: todo.completed ? 0.6 : 1 }}>
            <span onClick={() => dispatch(toggleTask(todo.id))} style={{ cursor: "pointer" }}>{todo.text}</span>
            <button onClick={() => dispatch(removeTask(todo.id))} style={{ padding: "5px 10px", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
