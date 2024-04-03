import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNewFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { setNewFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectTextFilter = (state) => state.filters.name;
