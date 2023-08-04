import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
