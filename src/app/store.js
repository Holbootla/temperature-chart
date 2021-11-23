import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../features/search-bar/searchBarSlice';

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});
