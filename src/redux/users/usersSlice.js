import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null
};



export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateCurrentUser: (state, action) => {
      //את הלקוח הנוכחי ושומרת אות ובסטייט action  פונקציה שמקבלת דרך ה
    }
  }
});

export const { updateCurrentUser } = usersSlice.actions;


export default usersSlice.reducer;
