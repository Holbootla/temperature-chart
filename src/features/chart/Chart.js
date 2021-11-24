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
  LabelList,
} from 'recharts';
import { selectSearchBar } from '../search-bar/searchBarSlice';

export function Chart() {
  const { forecastData } = useSelector(selectSearchBar);

  const data = forecastData.map((el) => {
    return {
      date: el.dt_txt,
      temp: Math.round(el.main.temp).toString(),
    };
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='temp' name='Temperature C&#176;' fill='green'>
          <LabelList dataKey='temp' position='top' />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
