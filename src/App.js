import React from 'react';
import { useSelector } from 'react-redux';
import { SearchBar } from './features/search-bar/SearchBar';
import { Chart } from './features/chart/Chart';
import { selectSearchBar } from './features/search-bar/searchBarSlice';

function App() {
  const { forecastData } = useSelector(selectSearchBar);
  return (
    <>
      <SearchBar />
      {forecastData && <Chart />}
    </>
  );
}

export default App;
