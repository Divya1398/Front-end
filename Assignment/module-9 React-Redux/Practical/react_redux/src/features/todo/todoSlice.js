import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    }
  }
});

export const { addTask, removeTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
