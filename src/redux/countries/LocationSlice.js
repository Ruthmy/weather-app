import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import weatherAPI from '../../API/weatherAPI';

export const fetchLocation = createAsyncThunk(
  'location/fetchLocation',
  async () => {
    try {
      const response = await axios.get(
        `${weatherAPI.baseURL}${weatherAPI.regionList}?apikey=${weatherAPI.key}`,
      );
      return response.data;
    } catch (error) {
      throw error.message;
    }
  },
);

const initialState = {
  location: [],
  status: 'idle',
  error: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.location = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = 'failed';
        state.location = [];
        state.error = action.error.message;
      });
  },
});

export default locationSlice.reducer;
