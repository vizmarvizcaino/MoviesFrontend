import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {},
  reducers: {
    addMovies: (state, action) => {
      if (action.payload) {
        state.movies = action.payload
      }
    }
  }
});

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;