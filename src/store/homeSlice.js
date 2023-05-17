import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genre: {},
  },
  reducers: {
    getApiValue: (state, action) => {
      state.url = action.payload;
    },
    getGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiValue, getGenre } = homeSlice.actions;

export default homeSlice.reducer;
