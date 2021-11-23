import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, FormControl } from '@mui/material/';
import { getForecast, setCity, selectSearchBar } from './searchBarSlice';

export function SearchBar() {
  const dispatch = useDispatch();
  const { city } = useSelector(selectSearchBar);

  const handleChange = (e) => {
    const searchingCity = e.target.value;
    dispatch(setCity(searchingCity));
  };

  const handleSubmit = () => {
    dispatch(getForecast(city));
  };

  return (
    <FormControl
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        id='outlined-search'
        label='City'
        type='search'
        onChange={handleChange}
        sx={{ m: 1 }}
      />
      <Button variant='contained' size='large' type='submit' sx={{ m: 1 }} onClick={handleSubmit}>
        Search
      </Button>
    </FormControl>
  );
}
