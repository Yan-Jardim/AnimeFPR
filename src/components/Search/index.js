import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function CustomizedInputBase() {

  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const api = 'https://kitsu.io/api/edge/';

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${api}anime?filter[text]=${text}&page[limit]=12`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  console.log();

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 230, height: 31, marginRight: "90px", borderRadius: "20px", border: '1px solid #fff', backgroundColor: 'transparent' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Buscar"
        value={text}
        onChange={(search) => setText(search)}
      />
      <IconButton type="button" sx={{ p: '10px', color: "white" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}