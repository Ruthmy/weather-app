import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './countries/LocationSlice';
import weatherReducer from './weather/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
  },
});

export default store;
