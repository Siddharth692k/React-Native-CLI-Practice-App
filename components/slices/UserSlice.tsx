import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: '',
  usersArr: [],
  currentUser: {},
};

const UserSlice = createSlice({
  name: 'userdetails',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    addUser(state, action) {
      state.usersArr.push(action.payload);
    },
    addCurrUser(state, action) {
      state.currentUser = action.payload;
    },
    resetCurrentUser(state, action) {
      state.currentUser = {};
    },
  },
});

export const {
  setUserName,
  setEmail,
  setPassword,
  addUser,
  addCurrUser,
  resetCurrentUser,
} = UserSlice.actions;

export default UserSlice.reducer;
