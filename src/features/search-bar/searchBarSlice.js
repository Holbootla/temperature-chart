import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchingCity: '',
};

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchingCity: (state, action) => {
      state.searchingCity = action.payload;
    },
  },
});

export const { setSearchingCity } = searchBarSlice.actions;

export const selectCity = (state) => state.searchBar.searchingCity;

export default searchBarSlice.reducer;
