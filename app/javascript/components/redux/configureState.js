import { configureStore } from  '@reduxjs/toolkit';
import greetingReducer from './greetReducer';

const Store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default Store;