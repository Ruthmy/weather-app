import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherStart: (state) => {
      state.loading = true;
    },
    getWeatherSuccess: (state, action) => {
      state.weather = action.payload;
      state.loading = false;
      state.error = null;
    },
    getWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getWeatherStart, getWeatherSuccess, getWeatherFailure } = weatherSlice.actions;

export default weatherSlice.reducer;
