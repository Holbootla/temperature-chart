import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { selectSearchBar } from '../search-bar/searchBarSlice';

export function Chart() {
  const { forecastData } = useSelector(selectSearchBar);

  useEffect(() => {
    console.log(forecastData);
  });

  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <BarChart
        width={500}
        height={300}
        data={forecastData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='dt_txt' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='main.temp' name='Temperature C' fill='green' />
      </BarChart>
    </ResponsiveContainer>
  );
}
