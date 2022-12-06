import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: [],
  reducers: {
    addLogin: (state, action) => {
      if (action.payload) {
        state.push(action.payload);
      }
    }
  }
});

export const { addLogin } = loginSlice.actions;
export default loginSlice.reducer;