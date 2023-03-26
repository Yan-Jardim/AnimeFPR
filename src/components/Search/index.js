import React, { useState } from 'react';
import * as M from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from 'next/router';

const SearchInput = ({ value, onChange, action }) => {

  return (
    <M.Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: '205px',
        height: '31px',
        border: "1px solid #FFF",
        borderRadius: '10px',
        backgroundColor: "transparent",
      }}
    >
      <M.InputBase
        sx={{ ml: 1, flex: 1, color: "#FFF" }}
        placeholder="Buscar"
        type="search"
        value={value}
        onChange={onChange}
      />

      <M.IconButton
        type="button"
        sx={{ p: "10px", color: "#FFF", padding: '0' }}
        aria-label="search"
        onClick={action}
      >
        <SearchIcon />
      </M.IconButton>
    </M.Paper>
  );
};

export default SearchInput;