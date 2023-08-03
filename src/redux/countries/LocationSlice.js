import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import weatherAPI from '../../API/weatherAPI';

export const fetchLocation = createAsyncThunk(
  'location/fetchLocation',
  async (location, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${weatherAPI.baseURL}${weatherAPI.regionList}?apikey=${weatherAPI.key}`,
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  location: null,
  loading: false,
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLocation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.location = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchLocation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default locationSlice.reducer;
