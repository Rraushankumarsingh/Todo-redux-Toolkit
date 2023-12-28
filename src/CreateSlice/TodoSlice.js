import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };

      state.todos.push(todo);
    },

    RemoveTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    UpdateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((item) =>
        item.id === id ? { ...item, text } : item
      );
    },
  },
});

export const { addTodo, RemoveTodo, UpdateTodo } = todoSlice.actions;
export default todoSlice.reducer;
