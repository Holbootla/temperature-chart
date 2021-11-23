import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../API/weatherAPI';

const initialState = {
  city: '',
  forecastData: null,
  loading: false,
  error: false,
};

export const getForecast = createAsyncThunk('searchBar/getForecast', async (city) => {
  const api = new Api(city);
  return await api.getForecast();
});

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [getForecast.fulfilled]: (state, action) => {
      state.forecastData = action.payload.list;
      console.log(action.payload.list);
    },
    [getForecast.pending]: (state) => {
      state.loading = true;
    },
    [getForecast.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const { setCity } = searchBarSlice.actions;

export const selectSearchBar = (state) => state.searchBar;

export default searchBarSlice.reducer;
