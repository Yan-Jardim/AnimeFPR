import * as React from 'react';
import * as M from "@mui/material";

export default function CardComponent(props) {

  return (
    <M.Card 
     onClick={props.action}
    sx={{ maxWidth: 345, cursor: "pointer", borderRadius: 'none', boxShadow: 'none' }}   >
    <M.CardMedia
      sx={{ height: 319, width: 225, margin: '0 10px' }}
      image={props.image}
    />
     </M.Card>
  );
}