import {configureStore} from '@reduxjs/toolkit';
import UserSliceReducer from './slices/UserSlice';

const store = configureStore({
  reducer: {
    User: UserSliceReducer,
  },
});

export default store;
