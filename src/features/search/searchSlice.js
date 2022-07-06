import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    updateSearch: (state, action) => {
      return action;
    },
  },
});
export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
