import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast, setCity, selectSearchBar } from './searchBarSlice';

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
    <form className='search-form' onClick={handleSubmit}>
      <input id='outlined-search' type='search' onChange={handleChange} sx={{ m: 1 }} />
      <button type='submit'>Search</button>
    </form>
  );
}
