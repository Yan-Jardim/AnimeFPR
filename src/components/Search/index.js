import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 230, height: 31, borderRadius: "20px", border: '1px solid #fff', backgroundColor: 'transparent' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Buscar"
      />
      <IconButton type="button" sx={{ p: '10px', color: "white" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}