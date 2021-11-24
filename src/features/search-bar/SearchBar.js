import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast, setCity, selectSearchBar } from './searchBarSlice';
import './SearchBar.css';

export function SearchBar() {
  const dispatch = useDispatch();
  const { city } = useSelector(selectSearchBar);

  const handleChange = (e) => {
    const searchingCity = e.target.value;
    dispatch(setCity(searchingCity));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getForecast(city));
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='search-input'
        type='search'
        onChange={handleChange}
        placeholder='enter city'
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
}
