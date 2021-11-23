import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, FormControl } from '@mui/material/';
import { setSearchingCity } from './searchBarSlice';

export function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchingCity = e.target.value;
    dispatch(setSearchingCity(searchingCity));
  };

  const handleSubmit = () => {};

  return (
    <FormControl
      onSubmit={handleSubmit}
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
      <Button variant='contained' size='large' type='submit' sx={{ m: 1 }}>
        Search
      </Button>
    </FormControl>
  );
}
