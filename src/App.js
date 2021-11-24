import React from 'react';
import { useSelector } from 'react-redux';
import { SearchBar } from './components/search-bar/SearchBar';
import { TemperatureChart } from './components/chart/Chart';
import { NotFound } from './components/not-found/NotFound';
import { Loader } from './components/loader/Loader';
import { selectSearchBar } from './redux/searchBarSlice';

function App() {
  const { forecastData, error, loading } = useSelector(selectSearchBar);
  return (
    <>
      <SearchBar />
      {forecastData && <TemperatureChart />}
      {error && <NotFound />}
      {loading && <Loader />}
    </>
  );
}

export default App;
