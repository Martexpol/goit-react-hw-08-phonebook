import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../../constants";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const reducer = filtersSlice.reducer;
export const { setStatusFilter } = filtersSlice.actions;
