import { configureStore } from "@reduxjs/toolkit";
import { reducer as filtersReducer } from "../slices/filters.slice";
import { reducer as tasksReducer } from "../slices/tasks.slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
