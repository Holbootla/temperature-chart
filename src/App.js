import React from 'react';
import { useSelector } from 'react-redux';
import { SearchBar } from './features/search-bar/SearchBar';
import { Chart } from './features/chart/Chart';
import { NotFound } from './features/not-found/NotFound';
import { Loader } from './features/loader/Loader';
import { selectSearchBar } from './features/search-bar/searchBarSlice';

function App() {
  const { forecastData, error, loading } = useSelector(selectSearchBar);
  return (
    <>
      <SearchBar />
      {forecastData && <Chart />}
      {error && <NotFound />}
      {loading && <Loader />}
    </>
  );
}

export default App;
