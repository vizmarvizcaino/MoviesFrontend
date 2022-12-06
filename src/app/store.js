import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/loginSlice';
import usersReducer from '../features/user/userSlice';
import moviesReducer from '../features/movies/moviesSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
    movies: moviesReducer
  }
});


