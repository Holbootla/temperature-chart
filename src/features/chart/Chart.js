import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';
import { selectSearchBar } from '../search-bar/searchBarSlice';

export function TemperatureChart() {
  const { forecastData } = useSelector(selectSearchBar);

  const data = forecastData.map((el) => {
    return [el.dt_txt, Math.round(el.main.temp)];
  });

  data.unshift(['Date and time', 'Temperature C°']);

  return (
    <>
      <Chart
        width={'100%'}
        height={'500px'}
        chartType='Bar'
        data={data}
        options={{
          chart: {
            title: 'Temperature chart',
          },
        }}
      />
    </>
  );
}
