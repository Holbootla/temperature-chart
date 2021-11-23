import React from 'react';
import { SearchBar } from './features/search-bar/SearchBar';
import { Chart } from './features/chart/Chart';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <Chart />
    </div>
  );
}

export default App;
