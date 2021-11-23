import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material/';
import { SearchBar } from './features/search-bar/SearchBar';
import { Chart } from './features/chart/Chart';
import { selectSearchBar } from './features/search-bar/searchBarSlice';

function App() {
  const { forecastData } = useSelector(selectSearchBar);
  return (
    <>
      <Container
        maxWidth='sm'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SearchBar />
      </Container>
      {forecastData && <Chart />}
    </>
  );
}

export default App;
