import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import weatherAPI from '../../API/weatherAPI';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (locationKey, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${weatherAPI.baseURL}${weatherAPI.currentConditionsURL}${locationKey}?apikey=${weatherAPI.key}`,
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

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
