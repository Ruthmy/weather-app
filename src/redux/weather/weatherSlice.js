import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import weatherAPI from '../../API/weatherAPI';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async () => {
    try {
      const response = await axios.get(
        `${weatherAPI.baseURL}${weatherAPI.currentConditionsURL}?apikey=${weatherAPI.key}`,
      );
      return response.data;
    } catch (error) {
      throw error.message;
    }
  },
);

export const initialState = {
  weather: [],
  status: 'idle',
  error: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.weather = [];
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
