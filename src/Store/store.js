import { configureStore } from "@reduxjs/toolkit";

import TodoSlice from "../CreateSlice/TodoSlice";
export const store = configureStore({
  reducer: TodoSlice,
});
