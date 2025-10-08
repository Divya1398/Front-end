import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/counter/counterSlice";
import todoSlice from "../features/todo/todoSlice";
import taskReducer from "../features/crud/taskSlice";
// name of file of store.js must be small latter..no change ..must be .js

export const store = configureStore({
    reducer:{
        count : counterSlice,
         todos : todoSlice,
         task: taskReducer
    }
})