import React from 'react';
import { Container } from '@mui/material/';
import { SearchBar } from './features/search-bar/SearchBar';
import { Chart } from './features/chart/Chart';

function App() {
  return (
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
      <Chart />
    </Container>
  );
}

export default App;
