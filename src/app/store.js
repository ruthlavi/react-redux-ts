import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../redux/users/usersSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    users:usersSlice
  },
});
