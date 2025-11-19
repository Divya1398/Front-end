import { useReducer, useState } from 'react';

// Reducer function: manages task actions (add, change, delete)
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      // Add a new task to the existing array
      return [...tasks, { id: action.id, text: action.text, done: false }];

    case 'changed':
      // Update an existing task (used for toggle done or editing)
      return tasks.map(t => (t.id === action.task.id ? action.task : t));

    case 'deleted':
      // Remove a task from the array
      return tasks.filter(t => t.id !== action.id);

    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

export default function TaskApp() {
  // State for task list using useReducer
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // State for new task input
  const [newTask, setNewTask] = useState('');

  // State to track which task is being edited (store task ID)
  const [editId, setEditId] = useState(null);

  // State to store temporary text when editing a task
  const [editText, setEditText] = useState('');

  // Function to add new task
  function handleAddTask() {
    if (newTask.trim() === '') return; // Ignore empty input
    dispatch({ type: 'added', id: nextId++, text: newTask });
    setNewTask(''); // Clear input after adding
  }

  // Function to toggle task done/undo
  function handleToggleDone(task) {
    dispatch({ type: 'changed', task: { ...task, done: !task.done } });
  }

  // Function to delete a task
  function handleDeleteTask(taskId) {
    dispatch({ type: 'deleted', id: taskId });
  }

  // Start editing a task
  function handleEditTask(task) {
    setEditId(task.id);       // mark task as being edited
    setEditText(task.text);   // pre-fill input with current text
  }

  // Save edited task
  function handleSaveEdit(taskId) {
    if (editText.trim() === '') return;  // Don't save empty text
    dispatch({
      type: 'changed',
      task: {
        id: taskId,
        text: editText,
        done: tasks.find(t => t.id === taskId).done // keep current done state
      }
    });
    setEditId(null);  // exit edit mode
    setEditText('');  // clear temp edit text
  }

  // Handle Enter key for adding new task
  function handleAddKeyPress(e) {
    if (e.key === 'Enter') handleAddTask();
  }

  // Handle Enter key for saving edited task
  function handleEditKeyPress(e, taskId) {
    if (e.key === 'Enter') handleSaveEdit(taskId);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task List with Checkbox & Edit</h1>

      {/* Input to add new task */}
      <input
        type="text"
        value={newTask}                     // current input value
        onChange={e => setNewTask(e.target.value)} // update input state
        onKeyDown={handleAddKeyPress}       // press Enter to add
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      {/* Task list */}
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: '10px 0' }}>
            {/* Checkbox to toggle done */}
            <input
              type="checkbox"
              checked={task.done}             // ticked if task is done
              onChange={() => handleToggleDone(task)}
              style={{ marginRight: '10px' }}
            />

            {/* Task text or input if editing */}
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}                 // current edit text
                  onChange={e => setEditText(e.target.value)}
                  onKeyDown={e => handleEditKeyPress(e, task.id)} // press Enter to save
                />
                <button onClick={() => handleSaveEdit(task.id)} style={{ marginLeft: '5px' }}>
                  Save
                </button>
              </>
            ) : (
              <>
                {/* Show task text with line-through if done */}
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                {/* Edit button */}
                <button onClick={() => handleEditTask(task)} style={{ marginLeft: '10px' }}>
                  Edit
                </button>
              </>
            )}

            {/* Delete button */}
            <button onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Initial tasks
let nextId = 3;  // next unique ID for new tasks
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];
