import React from 'react'
import CounterData from './features/counter/CounterData'
import TodoApp from './features/todo/TodoApp'
import TaskApp from './features/crud/TaskApp'

function App() {
  return (
    <div>
      <h1>Hello! Redux</h1>
      <CounterData/>
      <TodoApp/>
      <TaskApp/>
    </div>
  )
}

export default App
